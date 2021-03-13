export type VariantStatus = "active" | "disabled" | "active_on";

export type VariantSize = {
    id: number;
    measurement: number;
    quantity: number;
};

export type Variant = {
    id: number;
    name: string;
    sku: string;
    imageSrc: string[];
    sizes: VariantSize[];
};

export type Product = {
    id: number;
    name: string;
    variants: Variant[];
};

export type Collection = {
    id: number;
    name: string;
    description: string;
    variants: Variant[];
}


