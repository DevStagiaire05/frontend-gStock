import { inventoryApi } from "../api/inventory.api";
import { useInventory } from "../components/hooks/useInventory";
import { StoreForm } from "../components/StoreForm"; 
import { PageHeader } from "../components/ui/PageHeader";
import {EmptyState} from "../components/ui/EmptyState";

    export function StoresPage (){
            const {stores, refresh, loading, error} = useInventory();

            return(
                <section>
                    <PageHeader title="Magasins" description="Gestion des dépôts, point de vente ou entrepots " />
                    <StoreForm onSubmit={ async (payload) => {await inventoryApi.stores.create(payload); await refresh();}} />


                    {loading && <p className="mt-4 text-sm text-slate-500" >Chargement...</p>}
                    {error && <p className="mt-4 rounded-2xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}    

                    <div className="mt-6 grid  gap-4 md:grid-cols-2 xl:grid-cols-3 ">
                        {stores.length === 0 && <EmptyState title="Aucun magasin" message="Veuillez ajouter votre premier magasin." /> }
                        {stores.map((store) => (
                            <article key={store.id} className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                                <h2 className="text-lg font-bold text-slate-950">{store.name}</h2>
                                <p>{store.address || "Aucune adresse renseignée"}</p>
                            </article>
                        ))}
                    </div>
                </section>
            );
    }