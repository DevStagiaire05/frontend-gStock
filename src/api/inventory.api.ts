import {http} from './http';

import type {
    CreateProductPayload,
    CreateStorePayload,
    Product,
    Stock,
    StockInPayload,
    StockOutPayload,
    StockMovement,
    Store,
    TransferStockPayload,

} from '../types/inventory';

export const inventoryApi = {
    products : {
        list : async () => (await http.get<Product[]>('/products')).data,
        create : async (payload: CreateProductPayload) => (await http.post<Product>('/products', payload)).data,
        remove : async (id: string) => (await http.delete(`/products/${id}`)).data,
    },
    stores : {
        list : async () => (await http.get<Store[]>('/stores')).data,
        create : async (payload: CreateStorePayload) => (await http.post<Store>('/Stores', payload)).data,
        remove: async (id: string) => (await http.delete(`/Stores/${id}`)).data,
    },

    stocks : {
        list : async () => (await http.get<Stock[]>('/stocks')).data,
        bystore: async (storeId: string) => (await http.get<Stock[]>(`/stocks/store/${storeId}`)).data,
    },

    movements : {
        list : async () => (await http.get<StockMovement[]>('/stock-movements')).data,
        createIn: async (payload: StockInPayload) => (await http.post<StockMovement>('/stock-movements/in', payload)).data,
        createOut: async (payload: StockOutPayload) => (await http.post<StockMovement>('/stock-movements/out', payload)).data,
        transfer: async (payload: TransferStockPayload) => (await http.post<StockMovement>('/stock-movements/transfer', payload)).data,
    }
};