import { Provider, useDispatch } from "react-redux";
import store from "~lib/store";
import { ReactElement, useEffect } from "react";
import Head from "next/head";
import Header from "~components/layout/Header";
import { loadCollectionsAction } from "~lib/collections/actions";

import "~assets/styles/global.scss";
import { loadVariantsAction } from "~lib/variant/actions";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import LoadingScreen from "~components/common/LoadingScreen";

export const MyApp = ({ Component, pageProps }): ReactElement => {
    const dispatch = useDispatch();
    useEffect(() => {
        //TODO MOVE TO COMMON INITAPP HANDLER
        dispatch(loadCollectionsAction());
        dispatch(loadVariantsAction());
    }, []);
    return (
        <>
            <Head>
                <title>Hey</title>
            </Head>
            <Header />
            <Component {...pageProps} />
            <LoadingScreen />
        </>
    );
};

const WrappedApp = (props): ReactElement => {
    const theme = createMuiTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 900,
                md: 1024,
                lg: 1280,
                xl: 1920
            }
        }
    });

    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <MyApp {...props} />
            </Provider>
        </MuiThemeProvider>
    );
};

export default WrappedApp;
