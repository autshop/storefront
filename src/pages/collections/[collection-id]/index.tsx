import { FC } from "react";
import VariantList from "~components/collections/VariantList";
import { fetchCollections } from "~lib/collections/mock";
import { Collection } from "~lib/collections/types";
import { find } from "lodash";

type Props = {
    collectionProps: any;
};

const Collections: FC<Props> = ({ collectionProps }) => {
    if (!collectionProps) return <div>TODO 404</div>;
    return (
        <section>
            <h1>{collectionProps.id}</h1>
            <p>{collectionProps.name}</p>
            <VariantList collectionId={2} />
        </section>
    );
};

export const getServerSideProps = async context => {
    const {
        params: { "collection-id": collectionId }
    } = context;

    /*const response = await fetch("https://random-data-api.com/api/appliance/random_appliance");
    const data = await response.json();*/

    const collections: Collection[] = (await fetchCollections()) as Collection[];

    const collection = collections.find(collection => collection.id == collectionId);

    if (!collection) {
        return {
            props: { collectionProps: null }
        };
    }

    return {
        props: { collectionProps: collection }
    };
};

export default Collections;
