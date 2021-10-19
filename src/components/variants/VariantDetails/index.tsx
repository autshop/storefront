import { makeStyles, Typography } from "@material-ui/core";
import { FC, memo, useEffect, useState } from "react";
import { noop, map, sortBy, find, get } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
//
import { getVariantById } from "~lib/variant/selectors";
import { StoreState } from "~lib/state";
import Button from "~components/common/Button";
import { addSizeAction } from "~lib/checkout/actions";
import { Variant } from "~lib/variant/types";

const useStyles = makeStyles(theme => ({
    root: {
        background: "white",
        minHeight: "calc(100vh - 50px)",
        width: "100%"
    },
    container: {
        width: "90%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        paddingTop: "64px",

        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "1fr 1fr",
            width: "60%"
        }
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center"
    },
    image: {
        width: "80%"
    },
    details: {
        position: "relative"
    },
    variantName: {
        padding: "24px 0 0 0",
        [theme.breakpoints.up("sm")]: {
            padding: "0"
        }
    },
    variantDescription: {
        padding: "8px 0",
        [theme.breakpoints.up("sm")]: {
            padding: "0"
        }
    },
    actions: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.up("sm")]: {
            display: "block",
            margin: "0",
            position: "absolute",
            bottom: 0,
            left: 0
        }
    },
    button: { background: "#FFB775", color: "black", width: "164px", fontSize: "14px" },
    sizes: {
        display: "flex",
        padding: "16px 0"
    },
    size: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 8px",
        height: "24px",
        cursor: "pointer",
        borderRadius: "5px"
    },
    selectedSize: {
        background: "lightgray"
    },
    disabledSize: {
        color: "lightgray"
    }
}));

type Props = {
    variantId: number;
    preLoadedVariantProps: Variant;
};

const VariantDetails: FC<Props> = ({ variantId, preLoadedVariantProps }) => {
    const classes = useStyles();

    const [selectedSizeId, setSelectedSizeId] = useState<number>(null);

    const variant = useSelector((state: StoreState) => getVariantById(state, variantId));

    const sortedSizes = sortBy(variant?.sizes || preLoadedVariantProps.sizes, ["position"]);

    const dispatch = useDispatch();

    useEffect(() => {
        const firstAvailableSize = find(sortedSizes, ({ quantity }) => quantity > 0);
        if (firstAvailableSize && firstAvailableSize.id) setSelectedSizeId(firstAvailableSize.id);
    }, [variantId]);

    const handleAddToBagClick = () => dispatch(addSizeAction(selectedSizeId));

    const handleSizeChange = sizeId => setSelectedSizeId(sizeId);

    if (!variant) return null;

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={get(variant, "images[0].src", "")} alt="Variant Image." />
                </div>
                <div className={classes.details}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.variantName}>
                        <b>{preLoadedVariantProps.name}</b>
                    </Typography>

                    <Typography variant="body2" component="p" className={classes.variantDescription}>
                        {preLoadedVariantProps.description}
                    </Typography>

                    <div className={classes.actions}>
                        <div className={classes.sizes}>
                            {map(sortedSizes, size => (
                                <div
                                    className={classNames(classes.size, {
                                        [classes.selectedSize]: selectedSizeId === size.id,
                                        [classes.disabledSize]: size.quantity <= 0
                                    })}
                                    onClick={size.quantity <= 0 ? noop : () => handleSizeChange(size.id)}
                                >
                                    <Typography variant="body1" component="p">
                                        {size.measurement}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                        <Button className={classes.button} size="small" onClick={handleAddToBagClick}>
                            Add to bag
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(VariantDetails);
