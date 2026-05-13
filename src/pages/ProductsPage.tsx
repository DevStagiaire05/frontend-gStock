import { inventoryApi } from "../api/inventory.api";
import {ProductForm} from '../components/ProductForm';
import { PageHeader } from "../components/ui/PageHeader";
import { EmptyState } from "../components/ui/EmptyState";
import { useInventory } from "../components/hooks/useInventory";
import { formatCurrency } from "../components/utils/format";

  export function ProductsPage() {
    const {products, refresh, loading, error} = useInventory();

    return (
      <section>
        <PageHeader title="Produits" description="Catalogue des produits suivis dans les magasins." />
        <ProductForm onSubmit={async(payload) => {await inventoryApi.products.create(payload); await refresh();}} />
        
        {loading && <p className="mt-6 text-sm text-slate-500 ">Chargement...</p>}
        {error && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.length === 0 && <EmptyState title="Aucun produit" message="Créer un produit" />}
          {products.map((product)=> (
            <article key={product.id} className="rounded-2xl border border-geen-100 bg-white p-5 shadow-sm ">
              <p className="text-xs font-semibold uppercase tracking-wide text-green-500 ">{product.sku}</p>
              <h2 className="mt-2 text-lg font-bold text-slate-950 ">{product.name}</h2>
              <p className="text-sm mt-2 text-slate-500">{product.description || 'Sans description'}</p>
              <p>{formatCurrency(Number(product.unitPrice))}</p>
            </article>
          ))}
          </div>
      </section>
    )
  }
