import {useState} from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import type{ CreateStorePayload } from "../types/inventory";


    export function StoreForm({onSubmit}: {onSubmit: (payload: CreateStorePayload) => Promise<void>}){

        const [form, setForm]= useState<CreateStorePayload>({name:'', address:''});
        const [saving, setSaving]= useState(false);

        async function handleSubmit(event: React.SyntheticEvent){
            event.preventDefault();
            setSaving(true);

            try{
                await onSubmit(form);
                setForm({name:'', address:''});
            } finally{
                setSaving(false);
            }      
        }

        return( 
        <form onSubmit={handleSubmit} className="grid gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-sm md:grid-cols-3">
            <Input placeholder="Nom du magasin" value={form.name} onChange={(e) => setForm(prev =>({...prev, name:e.target.value}))} required />
            <Input placeholder="Adresse du magasin" value={form.address} onChange={(e)=> setForm(prev =>({...prev, address:e.target.value}))} />
            <Button disabled={saving}>{saving ? 'Enregistrement...' : 'Ajouter magasin'}</Button>
        </form>
        );
    }