import { FC } from "react";
import VariantList from "~components/collections/VariantList";

type Props = {
    data: any;
};

const Collections: FC<Props> = ({ data }) => {
    return (
        <section>
            <h1>{data.id}</h1>
            <p>
                Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nam vel fringilla arcu. Aliquam  rutrum
                rhoncus augue.{" "}
            </p>
            <VariantList collectionId={2} />
        </section>
    );
};

export async function getServerSideProps(context) {
    return {
        props: { data: null }
    };
}

export default Collections;
