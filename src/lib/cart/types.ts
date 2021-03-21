import { VariantSize } from "~lib/variant/types";

export type CartItem = {
    id: number;
    size: VariantSize;
    variantId: number;
};

export type Cart = {
    [id: number]: CartItem;
};
