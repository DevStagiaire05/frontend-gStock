import type {Stock} from '../types/inventory';
import { EmptyState } from './ui/EmptyState';


    export function StockTable(stocks:Stock[]){

        if(stocks.length ===0){
            return <EmptyState title=' le stock est vide' message='Approvisionner votre stock ' />;
        }
        return(
            <div className='overflow-hidden rounder-2xl border border-green-100 bg-white shadow-sm'>
                <div className='overflow-x-auto'>
                    <table className='min-w-full divide-y divide-slate-100 text-sm' >
                        <thead className='bg-green-50 text-left text-xs uppercase tracking-wide text-green-900' >
                            <tr>
                                <th className='px-4 py-3'>Produit</th>
                                <th className='px-4 py-3'>SKU</th>
                                <th className='px-4 py-3'>Magasin</th>
                                <th className='px-4 py-3'>Quantité</th>
                            </tr>
                        </thead>
                        <tbody className='divide divide-y divide-slate-100'>
                            {stocks.map((stock)=>(
                                <tr key={stock.id} className='hover:bg-green-50/50'>
                                    <td className='px-4 py-3 font-medium text-slate-950' >{stock.product.name}</td>
                                    <td className='px-4 py-3 text-slate-600' >{stock.product.sku}</td>
                                    <td className='px-4 py-3 text-slate-600' >{stock.store.name}</td>
                                    <td className='px-4 py-3 text-right font-bold text-green-900' >{stock.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }