export type VariantSize = {
    id: number;
    name: string;
    quantity: string;
}

export type Variant = {
    id: number;
    name: string;
    code: string;
    availability: string;
    sizes: VariantSize[];
}

