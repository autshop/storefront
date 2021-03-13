import { Provider, useDispatch } from "react-redux";
import store from "~lib/store";
import { ReactElement, useEffect } from "react";
import Head from "next/head";
import Header from "~components/layout/header";
import { loadCollectionsAction } from "~lib/collections/actions";

export const MyApp = ({ Component, pageProps }): ReactElement => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCollectionsAction());
    }, []);
    return (
        <>
            <Head>
                <title>Hey</title>
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
};

const WrappedApp = (props): ReactElement => (
    <Provider store={store}>
        <MyApp {...props} />
    </Provider>
);

export default WrappedApp;
