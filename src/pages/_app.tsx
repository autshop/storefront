import { Provider, useDispatch } from "react-redux";
import store from "~lib/store";
import { ReactElement, useEffect } from "react";
import Head from "next/head";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
//
import Header from "~components/layout/Header";
import "~assets/styles/global.scss";
import LoadingScreen from "~components/common/LoadingScreen";
import { initializeAppAction } from "~lib/app/actions";
import { getTenantName } from "~utils/helpers";

export const MyApp = ({ Component, pageProps }): ReactElement => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeAppAction());
    }, []);
    return (
        <>
            <Head>
                <title>{getTenantName()}</title>
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
