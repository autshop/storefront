export type VariantStatus = "active" | "disabled" | "active_on";

export type VariantSize = {
    id: number;
    name: string;
    quantity: string;
    hasStock: boolean;
    position: number;
};

export type Variant = {
    id: number;
    name: string;
    description: string;
    code: string;
    status: VariantStatus;
    statusDate: string;
    sizes: VariantSize[];
    price: number;
    currencyCode: string;
    sku: string;
    barcode: string;
};

export type Product = {
    id: number;
    variants: Variant[];
};
