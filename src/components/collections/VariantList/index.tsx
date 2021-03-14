import { FC, memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
//
import VariantListItem from "~components/collections/VariantListItem";
import { getVariantsByCollectionId } from "~lib/collections/selectors";
import { StoreState } from "~lib/state";
//
import css from "./style.module.scss";
import { useRouter } from "next/router";

type ScrollProperties = {
    scrollY: number;
};

const scrollProperties: ScrollProperties = {
    scrollY: 0
};

type Props = {
    collectionId: number;
};

const VariantList: FC<Props> = ({ collectionId }) => {
    const variantIds = useSelector((state: StoreState) => getVariantsByCollectionId(state, collectionId));

    const router = useRouter();

    const saveScrollPosition = () => (scrollProperties.scrollY = window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", saveScrollPosition);

        window.scrollTo(0, scrollProperties.scrollY);

        return () => {
            window.removeEventListener("scroll", saveScrollPosition);
        };
    }, [router.asPath]);

    return (
        <div className={css["VariantList"]}>
            <div className={css["container"]}>
                {map(variantIds, id => (
                    <div className={css["container-item"]}>
                        <VariantListItem variantId={id} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(VariantList);
