import { useEffect, useState } from "react";

import { apiClient } from "../api/client";
import type { Stock } from "../types/inventory";
import { StockTable } from "../components/StockTable";

    export function StocksPage(){
        const[stocks, setStocks] = useState<Stock[]>([]);
        const[loading, setLoading]= useState(true);

        async function loadStocks() {
            try{
                setLoading(true);
                const response = await apiClient.get<Stock[]>('Stocks');
                setStocks(response.data)
            }finally{
                setLoading(false);
            }  
        }  
            
            useEffect(()=>{
                loadStocks();
            },[]);

            if(loading){
                return <p>Chargement des stocks ...</p>;
            }

            return (<main>
                        <h1>Gestion de Stock multi-magasin</h1>
                        <StockTable stocks={stocks}/>
                    </main>
            );
        
    }