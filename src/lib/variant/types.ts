export type VariantStatus = "active" | "disabled" | "active_on";

export type VariantSize = {
    id: number;
    variantId: number;
    measurement: string;
    quantity: number;
    position: number;
};

export type VariantImage = {
    id: number;
    src: string;
};

export type Variant = {
    id: number;
    name: string;
    description: string;
    sku: number;
    images: VariantImage[];
    sizes: VariantSize[];
    status: VariantStatus;
};
