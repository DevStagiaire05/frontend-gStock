import {FormEvent, useState} from "react";
import {Button} from "./ui/Button";
import {Input} from "./ui/Input";
import type { CreateProductPayload } from "../types/inventory";


    export default function ProductForm({onSubmit}:{onSubmit:(payload:CreateProductPayload) => Promise<void>}){ 
        const [form, setForm] = useState<CreateProductPayload>({
            name:'',
            sku:'',
            description:'',
            unitPrice:0,
        });

        const [saving, setSaving] = useState(false);

        async function handleSubmit (event:FormEvent){
            event.preventDefault();
            setSaving(true);

            try{
                await onSubmit(form);
                setForm({name:'',sku:'',description:'',unitPrice:0});
            } finally {
                setSaving(false);
            }
        }

        return (
            <form onSubmit={handleSubmit} className="grid gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-sm md:grid-cols-4">
                <Input placeholder="Nom du produit" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                <Input placeholder="SKU" value={form.sku} onChange={(e) => setForm({...form, sku: e.target.value})}/>
                <Input  type='number' min="0" placeholder="Prix" value={form.unitPrice} onChange={(e) => setForm({...form, unitPrice: Number(e.target.value) || 0})} required/>
                <Button disabled={saving}>
                    {saving ? 'Enregistrement...' : 'Ajouter un produit'}
                </Button>

            </form>
        );

}

    