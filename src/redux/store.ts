import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "~redux/saga";
import rootReducer from "~redux/reducer";
import initialState from "~redux/state";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    (typeof window !== "undefined" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
