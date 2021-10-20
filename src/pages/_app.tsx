import { Provider, useDispatch, useSelector } from "react-redux";
import { ReactElement, useEffect } from "react";
import Head from "next/head";
import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";
//
import store from "~redux/store";
import Header from "~components/layout/Header";
import "~assets/styles/global.scss";
import LoadingScreen from "~components/common/LoadingScreen";
import { initializeAppAction } from "~redux/app/actions";
import { getTenantName } from "~utils/helpers";
import { createGetStorefrontPropertyValueByKey } from "~redux/storefrontProperty/selectors";

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

const MuiWrappedApp = (props): ReactElement => {
    const propertySiteBackgroundColor = useSelector(createGetStorefrontPropertyValueByKey("site.background.color"));
    const theme = createMuiTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 900,
                md: 1024,
                lg: 1280,
                xl: 1920
            }
        },
        overrides: {
            MuiCssBaseline: {
                "@global": {
                    body: {
                        backgroundColor: propertySiteBackgroundColor || "lightgray"
                    }
                }
            }
        }
    });

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <MyApp {...props} />
        </MuiThemeProvider>
    );
};

const WrappedApp = (props): ReactElement => {
    return (
        <Provider store={store}>
            <MuiWrappedApp {...props} />
        </Provider>
    );
};

export default WrappedApp;
