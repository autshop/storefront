import { FC, memo, useEffect, useState } from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    FormControl,
    makeStyles,
    MenuItem,
    Select,
    Typography
} from "@material-ui/core";
import { map, get, find, sortBy } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
//
import { addSizeAction } from "~redux/checkout/actions";
import Button from "~components/common/Button";
import { getVariantById } from "~redux/variant/selectors";
import { StoreState } from "~redux/state";

type Props = {
    variantId: number;
};

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    image: {
        height: 312,
        width: 232,
        margin: "0 auto",
        cursor: "pointer"
    },
    actions: {
        display: "block",
        "text-align": "center"
    },
    button: {
        background: "#FFB775",
        color: "black",
        width: "134px"
    },
    selectFormControl: {
        minWidth: 120,
        padding: "8px 0"
    },
    details: {
        cursor: "pointer"
    }
});

const VariantListItem: FC<Props> = ({ variantId }) => {
    const [selectedSizeId, setSelectedSizeId] = useState<number>(null);

    const variant = useSelector((state: StoreState) => getVariantById(state, variantId));

    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        const firstAvailableSize = find(get(variant, "sizes", []), ({ quantity }) => quantity > 0);
        if (firstAvailableSize) setSelectedSizeId(firstAvailableSize.id);
    }, [variantId, variant]);

    const handleSizeChange = size => setSelectedSizeId(get(size, "target.value", null));
    const handleAddToBagClick = () => {
        dispatch(addSizeAction(selectedSizeId));
    };

    if (!variant) return null;

    return (
        <Card className={classes.root}>
            <Link href="/variants/[variant-id]" as={`/variants/${variant.id}`} passHref>
                <CardMedia
                    className={classes.image}
                    component="img"
                    alt="Contemplative Reptile"
                    image={get(variant, "images[0].src", "")}
                    title="Contemplative Reptile"
                />
            </Link>

            <Link href="/variants/[variant-id]" as={`/variants/${variant.id}`} passHref>
                <CardContent className={classes.details}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {variant.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {variant.description}
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                        <b>{variant.price} EUR</b>
                    </Typography>
                </CardContent>
            </Link>

            <CardContent>
                <FormControl className={classes.selectFormControl}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedSizeId}
                        onChange={handleSizeChange}
                    >
                        {map(sortBy(variant.sizes, "position"), ({ measurement, id, quantity }) => (
                            <MenuItem value={id} disabled={quantity <= 0}>
                                {measurement}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </CardContent>

            <CardActions className={classes.actions}>
                <Button className={classes.button} size="small" onClick={handleAddToBagClick}>
                    Add to bag
                </Button>
            </CardActions>
        </Card>
    );
};

export default memo(VariantListItem);
