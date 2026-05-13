import { useState } from "react";
import type { SubmitEvent } from "react";

import { apiClient } from "../api/client";
import type { TransferStockPayload } from "../types/inventory";

    type TransferStockFromProps ={
        onTransferSuccess:()=> void;
    };

    export function TransferStockForm({onTransferSuccess}: TransferStockFromProps){
        const[form, setForm] = useState<TransferStockPayload>({
            productId:'',
            fromStoreId:'',
            toStoreId:'',
            quantity:1,
            reason:''

        });

        const[error,setError]= useState<string | null>(null);

        function updateField <K extends keyof TransferStockPayload>(key: K, value: TransferStockPayload[K]){
            setForm((previous) =>({
                ...previous,
                [key]:value,
            }));
        }

        async function handleSubmit(event: SubmitEvent){
            event.preventDefault();
            setError(null);

            try{
                await apiClient.post('/stock-movements/transfer',form);
                onTransferSuccess();
            }catch{
                setError('Le transfert de stock n\'est pas un succès');
            }
        }

            return ( <form onSubmit={handleSubmit}>
                    <h2>Transférer un Stock</h2>

                    <input 
                        placeholder="ID du magasin source"
                        value={form.productId}
                        onChange={(event) => updateField('productId',event.target.value)}
                    />

                    <input
                        placeholder="ID du magasion qui veut un transfert"
                        value={form.fromStoreId}
                        onChange={(event) => updateField('fromStoreId', event.target.value)}
                    />

                    <input
                        placeholder="ID du magasin à transférer"
                        value={form.toStoreId}
                        onChange={(event) => updateField('toStoreId', event.target.value)}
                    />

                    <input
                        type="number"
                        min={1}
                        value={form.quantity}
                        onChange={(event) => updateField('quantity', Number(event.target.value))}
                    />

                    <textarea
                        placeholder="Motif du transfert"
                        value={form.reason}
                        onChange={(event) => updateField('reason', event.target.value)}
                    />

                    {error && <p>{error}</p>}

                    <button type="submit">Valider le transfert</button>
            </form>

            );
        
    }