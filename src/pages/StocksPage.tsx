import { PageHeader } from "../components/ui/PageHeader";
import { StockTable } from "../components/StockTable";
import { useInventory } from "../components/hooks/useInventory";

    export function StocksPage(){
        const {stocks, loading, error} = useInventory();

        return(
            <section>
                <PageHeader title="Stocks" description="Quatités actuelles par produit et par magasin" />
                {loading && <p className="text-sm text-slate-500">Chargement...</p>}
                {error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p> }
                <StockTable stocks={stocks} />
            </section>
        );
        
    }