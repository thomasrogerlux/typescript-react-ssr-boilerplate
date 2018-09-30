import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/container/Home";

export default class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </React.Fragment>
        );
    }
}
