import { FC } from "react";
import Head from "next/head";
//
import VariantDetails from "~components/variants/VariantDetails";
import serverApi from "~api/index";
import { Variant } from "~lib/variant/types";
import { getTenantName } from "~utils/helpers";

type Props = {
    preLoadedVariantProps: Variant;
};

const Variants: FC<Props> = ({ preLoadedVariantProps }) => (
    <>
        <Head>
            <title>{preLoadedVariantProps.name + " - " + getTenantName()}</title>
        </Head>
        <VariantDetails variantId={preLoadedVariantProps.id} preLoadedVariantProps={preLoadedVariantProps} />
    </>
);

export const getServerSideProps = async context => {
    const {
        params: { "variant-id": variantId }
    } = context;

    const {
        data: { data: variant }
    } = await serverApi.get(`/variant/${variantId}`);

    return {
        props: { preLoadedVariantProps: variant }
    };
};

export default Variants;
