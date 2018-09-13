import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import App from "common/App";
import initReducer from "common/redux/reducer/init";

//@ts-ignore
const preloadedState = window["PRELOADED_STATE"];
//@ts-ignore
delete window["PRELOADED_STATE"]; 

const store = Redux.createStore(initReducer, preloadedState)

ReactDOM.hydrate(
    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>,
    document.getElementById("root")
);
