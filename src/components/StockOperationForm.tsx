import{useState} from "react";
import {Button} from "./ui/Button";
import {Input} from "./ui/Input";
import {Select} from "./ui/Select";
import type {Product, Store} from '../types/inventory';

type Operation= 'IN' | 'OUT' | 'TRANSFER';

type Props = {
    products : Product[];
    stores : Store[];
    onSubmit : (operation: Operation,payload:Record<string, unknown>) => Promise<void>;
};

    export default function StockOperationForm({products, stores, onSubmit}: Props){
        const [operation, setOperation] = useState<Operation>('IN');
        const [productId, setProductId] = useState('');
        const [toStoreId, setToStoreId] = useState('');
        const [fromStoreId, setFromStoreId] = useState('');
        const [quantity, setQuantity] = useState(0);
        const [reason, setReason] = useState('');
        const [saving, setSaving] = useState(false);

        async function handleSubmit (event: React.SyntheticEvent){
            event.preventDefault();
            setSaving(true);

            try {
                const payload= operation === 'IN' ? {productId, toStoreId, quantity, reason} 
                             : operation ==='OUT' ? {productId, fromStoreId, quantity, reason} : {productId, fromStoreId, toStoreId, quantity, reason};

                    await onSubmit(operation, payload);
                    setQuantity(1);
                    setReason('');
            }finally{
                setSaving(false);
            }
        }

            return (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        <Select value={operation} onChange={(e) => setOperation(e.target.value as Operation)} >
                            <option value="IN"> Entrée de stock</option>
                            <option value="OUT"> Sortie de stock</option>
                            <option value="TRANSFER"> Transfert de stock</option>
                        </Select>

                        <Select value={productId} onChange={(e) => setProductId(e.target.value)} required >
                            <option value="">Produit</option>
                            {products.map((product) => <option key={product.id} value={product.id}>{product.name} - {product.sku}</option>)}
                        </Select>

                        {(operation ==='OUT'|| operation==='TRANSFER') && (
                            <Select value={fromStoreId} onChange={(e) => setFromStoreId(e.target.value)} required>
                                <option value="">Magasin source</option>
                                {stores.map((store) => <option key={store.id} value={store.id} >{store.name}</option>)}
                            </Select>
                        )}

                        {(operation ==='IN' || operation==='TRANSFER') &&(
                            <Select value={toStoreId} onChange={(e)=> setToStoreId(e.target.value)} required>
                                <option value="">Magasin destination</option>
                                {stores.map((store) => <option key={store.id} value={store.id}>{store.name}</option>)}
                            </Select>
                        )}

                        <Input type="number" min="1" value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))} required/>
                    </div>
                    <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto]">
                        <Input placeholder="Motif de transaction" value={reason} onChange={(e)=>setReason(e.target.value)} />
                        <Button disabled={saving} >{saving ? "Traitement ..." : "Valider l'Opération"}</Button>
                    </div>
                </form>
            );


    }