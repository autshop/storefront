import {Provider} from "react-redux";
import store from "~lib/store";

export const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

const WrappedApp = (props) => (
    <Provider store={store}>
        <MyApp {...props} />
    </Provider>
);

export default WrappedApp;