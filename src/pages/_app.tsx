import { Provider } from "react-redux";
import store from "~lib/store";
import { ReactElement } from "react";
import Head from "next/head";
import Header from "~components/layout/header";

export const MyApp = ({ Component, pageProps }): ReactElement => {
    return (
        <>
            <Head>
                <title>Hey</title>
            </Head>
            <Header />
            <Component {...pageProps} />;
        </>
    );
};

const WrappedApp = (props): ReactElement => (
    <Provider store={store}>
        <MyApp {...props} />
    </Provider>
);

export default WrappedApp;
