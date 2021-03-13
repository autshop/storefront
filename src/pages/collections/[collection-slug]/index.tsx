import { FC } from "react";
import VariantList from "~components/collections/VariantList";

type Props = {
    data: any;
};

const Collections: FC<Props> = ({ data }) => {
    return (
        <section>
            <h1>{data.id}</h1>
            <p>{data.brand}</p>
            <VariantList collectionId={2} />
        </section>
    );
};

export const getServerSideProps = async context => {
    const response = await fetch("https://random-data-api.com/api/appliance/random_appliance");
    const data = await response.json();
    return {
        props: { data }
    };
};

export default Collections;
