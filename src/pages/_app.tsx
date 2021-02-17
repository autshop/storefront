import { Provider } from "react-redux";
import store from "~lib/store";
import { ReactElement } from "react";

export const MyApp = ({ Component, pageProps }): ReactElement => {
    return <Component {...pageProps} />;
};

const WrappedApp = (props): ReactElement => (
    <Provider store={store}>
        <MyApp {...props} />
    </Provider>
);

export default WrappedApp;
