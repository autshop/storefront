import { Collection } from "~lib/collections/types";
import { Variant, VariantSize } from "~lib/variant/types";

//note: ID-s will be different per variant
const sizes: VariantSize[] = [
    { id: 1, quantity: 0, measurement: "XS" },
    { id: 2, quantity: 0, measurement: "S" },
    { id: 3, quantity: 2, measurement: "M" },
    { id: 4, quantity: 3, measurement: "L" },
    { id: 5, quantity: 6, measurement: "XL" }
];

const imageSrcList = [
    "https://cdn.shopify.com/s/files/1/0159/3150/6742/products/i-am-an-example-to-others-a-bad-example-mens-premium-t-shirt-t-shirt-graphic-gear-black-s-648295.jpg?v=1572880068"
];

const collections: Collection[] = [{ id: 1, description: "Szep ruhak", name: "Felsők", variantIds: [1, 2, 3, 4, 5] }];

const variants: Variant[] = [
    {
        id: 1,
        sizes: sizes,
        name: "Blue Top",
        imageSrcList: imageSrcList,
        sku: 23223,
        status: "active",
        description: "Szep Ruha"
    },
    {
        id: 2,
        sizes: sizes,
        name: "Red top",
        imageSrcList: imageSrcList,
        sku: 23223,
        status: "active",
        description: "Szep Ruha"
    },
    {
        id: 3,
        sizes: sizes,
        name: "Fancy Dress",
        imageSrcList: imageSrcList,
        sku: 23223,
        status: "active",
        description: "Szep Ruha"
    },
    {
        id: 4,
        sizes: sizes,
        name: "Cool shirt",
        imageSrcList: imageSrcList,
        sku: 23223,
        status: "active",
        description: "Szep Ruha"
    },
    {
        id: 5,
        sizes: sizes,
        name: "Worst jeans",
        imageSrcList: imageSrcList,
        sku: 23223,
        status: "active",
        description: "Szep Ruha"
    }
];

export const fetchCollections = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(collections), 200);
    });
};

export const fetchVariants = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(variants), 200);
    });
};
