import { FC } from "react";
import Link from "next/link";
import { map } from "lodash";
import { useSelector } from "react-redux";
import Head from "next/head";
import { Button, Card, CardContent, makeStyles, Typography } from "@material-ui/core";
//
import { getCollections } from "~redux/collections/selectors";
import { getTenantName } from "~utils/helpers";

const useStyles = makeStyles({
    root: {
        width: "60%",
        margin: "64px auto 0 auto"
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: "32px",
        textAlign: "center",
        padding: "16px 0 32px 0"
    },
    collections: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    collection: {
        fontSize: "16px"
    }
});

const Index: FC = () => {
    const classes = useStyles();
    const collections = useSelector(getCollections);

    return (
        <div>
            <Head>
                <title>{getTenantName()}</title>
            </Head>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2">
                        Collections
                    </Typography>
                    <div className={classes.collections}>
                        {map(collections, collection => (
                            <Link href={`/collections/[collection-id]/`} as={`/collections/${collection.id}`} passHref>
                                <Button size="small" className={classes.collection}>
                                    {collection.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Index;
