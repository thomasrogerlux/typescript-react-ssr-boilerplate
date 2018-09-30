import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { JssProvider } from "react-jss";
import {
    MuiThemeProvider,
    createGenerateClassName
} from "@material-ui/core/styles";

import App from "common/App";
import theme from "common/theme";
import { changeTitle } from "common/redux/reducers/title";

const preloadedState = (window as any)["__PRELOADED_STATE__"];
delete (window as any)["__PRELOADED_STATE__"];

const store = Redux.createStore(changeTitle, preloadedState);

ReactDOM.hydrate(
    <ReduxProvider store={store}>
        <Router>
            <JssProvider generateClassName={createGenerateClassName()}>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </JssProvider>
        </Router>
    </ReduxProvider>,
    document.getElementById("root")
);
