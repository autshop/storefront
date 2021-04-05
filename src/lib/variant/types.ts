export type VariantStatus = "active" | "disabled" | "active_on";

export type VariantSize = {
    id: number;
    measurement: string;
    quantity: number;
    position: number;
};

export type Variant = {
    id: number;
    name: string;
    description: string;
    sku: number;
    imageSrc: string;
    sizes: VariantSize[];
    status: VariantStatus;
};
