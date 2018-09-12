import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import App from "common/App";
import { changeTitle } from "common/redux/reducer/title";

//@ts-ignore
const preloadedState = window["PRELOADED_STATE"];
//@ts-ignore
delete window["PRELOADED_STATE"]; 

const store = Redux.createStore(changeTitle, preloadedState)

ReactDOM.hydrate(
    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>,
    document.getElementById("root")
);
