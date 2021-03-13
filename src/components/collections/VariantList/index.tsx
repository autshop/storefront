import { FC, memo } from "react";
import VariantListItem from "~components/collections/VariantListItem";

import css from "./style.module.scss";

type Props = {
    collectionId: number;
};

const VariantList: FC<Props> = ({ collectionId }) => (
    <div className={css["VariantList"]}>
        <span>Collection {collectionId}</span>
        <div className={css["container"]}>
            <div className={css["container-item"]}>
                <VariantListItem variantId={1} />
            </div>
            <div className={css["container-item"]}>
                <VariantListItem variantId={1} />
            </div>
            <div className={css["container-item"]}>
                <VariantListItem variantId={1} />
            </div>
            <div className={css["container-item"]}>
                <VariantListItem variantId={1} />
            </div>
            <div className={css["container-item"]}>
                <VariantListItem variantId={1} />
            </div>
            <div className={css["container-item"]}>
                <VariantListItem variantId={1} />
            </div>
            <div className={css["container-item"]}>
                <VariantListItem variantId={1} />
            </div>
            <div className={css["container-item"]}>
                <VariantListItem variantId={1} />
            </div>
            <div className={css["container-item"]}>
                <VariantListItem variantId={1} />
            </div>
        </div>
    </div>
);

export default memo(VariantList);
