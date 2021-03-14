import { Collection } from "~lib/collections/types";
import { Variant } from "~lib/variant/types";

const collections: Collection[] = [{ id: 1, description: "Szep ruhak", name: "Felsők", variantIds: [1, 2, 3, 4, 5] }];

const variants: Variant[] = [
    { id: 1, sizes: [], name: "Blue Top", imageSrc: [], sku: 23223, status: "active", description: "Szep Ruha" },
    { id: 2, sizes: [], name: "Red top", imageSrc: [], sku: 23223, status: "active", description: "Szep Ruha" },
    {
        id: 3,
        sizes: [],
        name: "Fancy Dress",
        imageSrc: [],
        sku: 23223,
        status: "active",
        description: "Szep Ruha"
    },
    { id: 4, sizes: [], name: "Cool shirt", imageSrc: [], sku: 23223, status: "active", description: "Szep Ruha" },
    { id: 5, sizes: [], name: "Worst jeans", imageSrc: [], sku: 23223, status: "active", description: "Szep Ruha" }
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
