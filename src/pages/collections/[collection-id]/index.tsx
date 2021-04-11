import { FC, useMemo } from "react";
import { get } from "lodash";
import VariantList from "~components/collections/VariantList";
import { fetchCollections } from "~mock/index";
import { Collection } from "~lib/collections/types";
import { makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getCollectionById } from "~lib/collections/selectors";
import { StoreState } from "~lib/state";

const useStyles = makeStyles({
    collectionName: {
        "font-size": "26px",
        "text-align": "center",
        padding: "38px 0"
    },
    collectionDescription: {
        "font-size": "20px",
        "text-align": "center",
        "padding-bottom": "72px"
    }
});
type Props = {
    collectionProps: any;
};

const Collections: FC<Props> = ({ collectionProps }) => {
    const classes = useStyles();

    const collection = useSelector((state: StoreState) => getCollectionById(state, collectionProps.id));

    const variantIds = useMemo(() => {
        return get(collection, "variantIds", []);
    }, [collection]);

    return (
        <section>
            <Typography variant="body1" className={classes.collectionName}>
                {collectionProps.name}
            </Typography>

            <Typography variant="body1" className={classes.collectionDescription}>
                {collectionProps.description}
            </Typography>
            <VariantList variantIds={variantIds} />
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

    return {
        props: { collectionProps: collection }
    };
};

export default Collections;
