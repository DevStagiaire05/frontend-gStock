import {useCallback, useState, useEffect} from 'react';
import { inventoryApi } from '../../api/inventory.api';
import type { StockMovement, Product, Stock,  Store } from '../../types/inventory';


    export function useInventory() { 

        const [products, setProducts] = useState<Product[]>([]);
        const [stores, setStores] = useState<Store[]>([]);
        const [stocks, setStocks] = useState<Stock[]>([]);
        const [movements, setMovements] = useState<StockMovement[]>([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);

        const refresh = useCallback(async () =>{
            try{
                setLoading(true);
                setError(null);
                const[producList, storeList, stockList, movementList] = await Promise.all([
                    inventoryApi.products.list(),
                    inventoryApi.stores.list(),
                    inventoryApi.stocks.list(),
                    inventoryApi.movements.list().catch(() =>[]),
                ]);

                setProducts(producList);
                setStores(storeList);
                setStocks(stockList);
                setMovements(movementList);
            }catch(err){
                setError(err instanceof Error ? err.message: 'Erreur de chargement');
            }finally{
                setLoading(false);
            }
        },[]);

        useEffect(() => {
            refresh();
        },[refresh]);

        return {products, stores, stocks, movements, loading, error, refresh};
    }