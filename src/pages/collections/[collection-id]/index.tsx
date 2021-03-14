import { FC } from "react";
import VariantList from "~components/collections/VariantList";
import { fetchCollections } from "~mock/index";
import { Collection } from "~lib/collections/types";
import { makeStyles, Typography } from "@material-ui/core";

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

    return (
        <section>
            <Typography variant="body1" className={classes.collectionName}>
                {collectionProps.name}
            </Typography>

            <Typography variant="body1" className={classes.collectionDescription}>
                {collectionProps.description}
            </Typography>
            <VariantList collectionId={collectionProps.id} />
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
