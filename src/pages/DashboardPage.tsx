import {Boxes, Package, Repeat, Store} from 'lucide-react';
import { useInventory } from '../components/hooks/useInventory';
import { PageHeader } from '../components/ui/PageHeader';
import { StatCard } from '../components/ui/StatCard';


    export function DashboardPage() {

        const {products, stores,stocks, movements, loading, error} = useInventory();
        const totalQuantity = stocks.reduce((sum, stock)=> sum + stock.quantity,0);

        return (
          <section>
            <PageHeader title='Tableau de bord' description='Vue global du stock multi-magasin.'/>
            {loading && <p className='text-sm text-slate-500'>Chargement...</p>}
            {error && <p className='rounded-xl bg-red-50 p-3 text-sm text-red-700'>{error}</p>}

            <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
              <StatCard title='Produits' value={products.length} icon={<Package size={20} />} />
              <StatCard title='Magasins' value={stores.length} icon={<Store size={20}/>} />
              <StatCard title='Quantité totale' value={totalQuantity} icon={<Boxes size={20} />} />
              <StatCard title='Mouvements' value={movements.length} icon={<Repeat size={20} />} />
            </div>
          </section>
        );
  }
