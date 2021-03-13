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
    status: VariantStatus;
};
