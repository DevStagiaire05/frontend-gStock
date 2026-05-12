export type Product = {
    id: string;
    name: string;
    sku: string;
    unitPrice: number;
    description?: string;
    createdAt: string;
};

export type Store = {
    id: string;
    name: string;
    address?: string; 
    createdAt: string;
};

export type Stock = {
    id : string;
    quantity: number;
    product: Product;
    store : Store;
    updatedAt : string;
};

export type TransferStockPayload = {
    productId : string;
    fromStoreId: string;
    toStoreId : string;
    quantity: number;
    reason?: string;
};

export type MovementType = 'IN' | 'OUT' | 'TRANSFER';

export type StockMovement = {
    id: string;
    type: MovementType;
    quantity: number;
    reason?: string;
    product: Product;
    fromStore?: Store | null;
    toStore?: Store | null;
    createdAt: string;
}

export type CreateProductPayload = {
    name: string;
    sku: string;
    description?: string;
    unitPrice: number;
}

export type CreateStorePayload = {
    name: string;
    address?: string;
}

export type StockInPayload = {
    productId: string;
    toStoreId: string;
    quantity: number;
    reason?: string;
}

export type StockOutPayload = {
    productId: string;
    fromStoreId: string;
    quantity: number;
    reason?: string;
}