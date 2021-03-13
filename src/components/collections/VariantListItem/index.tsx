import { FC, memo, useState } from "react";
import {
    Button,
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
import { map, get } from "lodash";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addSizeAction } from "~lib/cart/actions";

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

//TODO
const tempSizes = ["OS", "X", "XL"];

const VariantListItem: FC<Props> = ({ variantId }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(tempSizes[0]);

    const dispatch = useDispatch();

    const handleSizeChange = size => setSelectedSize(get(size, "target.value", null));

    const handleAddToBagClick = () => {
        const size = 1;
        dispatch(addSizeAction(size));
    };

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Link href={`/variants/${variantId}`} passHref>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        component="img"
                        alt="Contemplative Reptile"
                        image="https://cdn.shopify.com/s/files/1/0159/3150/6742/products/i-am-an-example-to-others-a-bad-example-mens-premium-t-shirt-t-shirt-graphic-gear-black-s-648295.jpg?v=1572880068"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
                            all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>

            <CardContent>
                <FormControl className={classes.selectFormControl}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedSize}
                        onChange={handleSizeChange}
                    >
                        {map(tempSizes, size => (
                            <MenuItem value={size}>{size}</MenuItem>
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
