import { useInventory } from "../components/hooks/useInventory";
import { inventoryApi } from "../api/inventory.api";
import { PageHeader } from "../components/ui/PageHeader";
import {StockOperationForm} from "../components/StockOperationForm";

    export function OperationsPage(){

        const {products, stores, refresh, loading, error} = useInventory();

        async function handleOperation (operation: 'IN' |'OUT' | 'TRANSFER', payload : Record<string, unknown>){
                if (operation === 'IN') await inventoryApi.movements.createIn(payload as never);
                if(operation === 'OUT') await inventoryApi.movements.createOut(payload as never);
                if (operation === 'TRANSFER') await inventoryApi.movements.transfer(payload as never);
                
                await refresh();
        }   

        return(
            <section>
                <PageHeader title="Opération de stock" description="Opération d'entrée, sortie ou un transfert inter-magasin"/>
                {loading && <p className="text-sm text-slate-500">Chargement en cours...</p>}
                {error && <p className="rounded-xl br-red-50 mb-4 p-3 text-sm text-red-700">{error}</p>}
                <StockOperationForm products={products} stores={stores} onSubmit={handleOperation} />
            </section>
        );
    }