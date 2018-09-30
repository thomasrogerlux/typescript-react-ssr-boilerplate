import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/pages/Home";
import Test from "common/pages/Test";
import AppBar from "common/containers/AppBar/AppBar.component";

export default class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <AppBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/test" component={Test} />
                </Switch>
            </React.Fragment>
        );
    }
}
