import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/container/Home";
import Test from "common/container/Test";

export default class App extends React.Component {
    public render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/test" component={Test} />
                </Switch>
            </main>
        );
    }
}
