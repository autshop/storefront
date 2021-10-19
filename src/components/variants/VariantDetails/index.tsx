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
    images: {},
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        height: "50vh",
        position: "relative",
        overflow: "hidden",
        width: "80%",
        margin: "0 auto"
    },
    image: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "auto"
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
    },
    imageList: {
        display: "grid",
        gridGap: "16px",
        gridAutoRows: "120px",
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "80%",
        margin: "32px auto 0 auto"
    },
    imageListItem: {
        width: "80%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer"
    },
    imageListItemImage: {
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
}));

type Props = {
    variantId: number;
    preLoadedVariantProps: Variant;
};

const VariantDetails: FC<Props> = ({ variantId, preLoadedVariantProps }) => {
    const classes = useStyles();

    const [selectedSizeId, setSelectedSizeId] = useState<number>(null);
    const [selectedImageId, setSelectedImageId] = useState<number>(null);

    const variant = useSelector((state: StoreState) => getVariantById(state, variantId));

    const sortedSizes = sortBy(variant?.sizes || preLoadedVariantProps.sizes, ["position"]);

    const dispatch = useDispatch();

    useEffect(() => {
        const firstAvailableSize = find(sortedSizes, ({ quantity }) => quantity > 0);
        if (firstAvailableSize && firstAvailableSize.id) setSelectedSizeId(firstAvailableSize.id);
    }, [variantId]);

    useEffect(() => {
        setSelectedImageId(get(variant, "images[0].id", null));
    }, [variantId, variant?.images]);

    const handleAddToBagClick = () => dispatch(addSizeAction(selectedSizeId));

    const handleSizeChange = sizeId => setSelectedSizeId(sizeId);

    if (!variant) {
        return null;
    }

    const selectedImage = find(variant.images, ({ id }) => id === selectedImageId);

    //TODO COMPONENTS
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.images}>
                    <div className={classes.imageContainer}>
                        {selectedImage && (
                            <img className={classes.image} src={selectedImage.src} alt="Variant Image." />
                        )}
                    </div>

                    <div className={classes.imageList}>
                        {map(variant.images || [], ({ id, src }) => (
                            <div key={id} className={classes.imageListItem} onClick={() => setSelectedImageId(id)}>
                                <img className={classes.imageListItemImage} src={src} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.details}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.variantName}>
                        <b>{preLoadedVariantProps.name}</b>
                    </Typography>

                    <Typography variant="body2" component="p" className={classes.variantDescription}>
                        {preLoadedVariantProps.description}
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" className={classes.variantDescription}>
                        <b>{preLoadedVariantProps.price} EUR</b>
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
