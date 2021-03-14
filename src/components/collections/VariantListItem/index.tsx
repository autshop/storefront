import { FC, memo, useEffect, useState } from "react";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    FormControl,
    makeStyles,
    MenuItem,
    Select,
    Typography
} from "@material-ui/core";
import { map, get, find } from "lodash";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addSizeAction } from "~lib/cart/actions";
import Button from "~components/common/Button";
import { getVariantById } from "~lib/variant/selectors";
import { StoreState } from "~lib/state";

type Props = {
    variantId: number;
};

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    image: {
        height: 312,
        width: 232
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
        const size = 1;
        dispatch(addSizeAction(size));
    };

    if (!variant) return null;

    return (
        <Card className={classes.root}>
            <Link href={`/variants/${variantId}`} passHref>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        component="img"
                        alt="Contemplative Reptile"
                        image={variant.imageSrcList[0]}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {variant.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {variant.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>

            <CardContent>
                <FormControl className={classes.selectFormControl}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedSizeId}
                        onChange={handleSizeChange}
                    >
                        {map(variant.sizes, ({ measurement, id, quantity }) => (
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
