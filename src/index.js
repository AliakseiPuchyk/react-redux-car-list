import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./containers/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
// const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
