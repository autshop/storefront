import { FC, useMemo } from "react";
import { get } from "lodash";
import { makeStyles, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import VariantDetails from "~components/variants/VariantDetails";

const useStyles = makeStyles({});
type Props = {};

const Variants: FC<Props> = () => {
    const classes = useStyles();

    const router = useRouter();

    const variantId = Number(get(router, "query.variant-id", null));

    return <VariantDetails variantId={variantId} />;
};
/*
export const getServerSideProps = async context => {
    const {
        params: { "collection-id": collectionId }
    } = context;

    const {
        data: { data: collection }
    } = await serverApi.get(`/collection/${collectionId}`);

    return {
        props: { collectionProps: collection }
    };
};*/

export default Variants;
