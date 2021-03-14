import { Collection } from "~lib/collections/types";

const collections: Collection[] = [{ id: 1, description: "Szep ruhak", name: "Felsők", variantIds: [1, 2] }];

export const fetchCollections = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(collections), 200);
    });
};
