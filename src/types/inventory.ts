export type Product = {
    id: string;
    name: string;
    sku: string;
    unitPrice: number;
};

export type Store = {
    id: string;
    name: string;
    address?: string; 
};

export type Stock = {
    id : string;
    quantity: number;
    product: Product;
    store : Store;
    updatedAt : string;
};

export type TransferStockPaylod = {
    productId : string;
    fromStoreId: string;
    toStoreId : string;
    quantity: number;
    reason?: string;
};