import { FC } from "react";
//
import VariantDetails from "~components/variants/VariantDetails";
import serverApi from "~api/index";
import { Variant } from "~lib/variant/types";

type Props = {
    preLoadedVariantProps: Variant;
};

const Variants: FC<Props> = ({ preLoadedVariantProps }) => (
    <VariantDetails variantId={preLoadedVariantProps.id} preLoadedVariantProps={preLoadedVariantProps} />
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
