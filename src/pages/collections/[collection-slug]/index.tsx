import { FC } from "react";
import VariantList from "~components/collections/VariantList";

const Collections: FC = () => {
    return (
        <section>
            <h1>Collection #1</h1>
            <p>
                Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nam vel fringilla arcu. Aliquam  rutrum
                rhoncus augue.{" "}
            </p>
            <VariantList collectionId={2} />
        </section>
    );
};

export default Collections;
