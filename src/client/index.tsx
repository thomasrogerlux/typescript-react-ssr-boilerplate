import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "common/App";
import { changeTitle } from "common/redux/reducer/title";
import { Store } from "common/redux/store";

const preloadedState = (window as any)["__PRELOADED_STATE__"];
delete (window as any)["__PRELOADED_STATE__"];

const store = Redux.createStore(changeTitle, preloadedState);

ReactDOM.hydrate(
    <ReactRedux.Provider store={store}>
        <Router>
            <App />
        </Router>
    </ReactRedux.Provider>,
    document.getElementById("root")
);
