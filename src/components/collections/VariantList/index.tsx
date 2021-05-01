import { FC, memo, useEffect } from "react";
import classnames from "classnames";
import { map } from "lodash";
import { useRouter } from "next/router";
//
import VariantListItem from "~components/collections/VariantListItem";
//
import css from "./style.module.scss";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {},
    container: {
        width: "80vw",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    },
    containerItem: {
        flex: "0 0 312px",
        marginBottom: "72px",
        maxWidth: "312px"
    }
}));

type ScrollProperties = {
    scrollY: number;
};

const scrollProperties: ScrollProperties = {
    scrollY: 0
};

type Props = {
    variantIds: number[];
};

const VariantList: FC<Props> = ({ variantIds }) => {
    const router = useRouter();
    const classes = useStyles();

    const saveScrollPosition = () => (scrollProperties.scrollY = window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", saveScrollPosition);

        window.scrollTo(0, scrollProperties.scrollY);

        return () => {
            window.removeEventListener("scroll", saveScrollPosition);
        };
    }, [router.asPath]);

    return (
        <div className={classnames(classes.root, css["VariantList"])}>
            <div className={classnames(classes.container, css["container"])}>
                {map(variantIds, id => (
                    <div className={classnames(classes.containerItem, css["container-item"])} key={id}>
                        <VariantListItem variantId={id} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(VariantList);
