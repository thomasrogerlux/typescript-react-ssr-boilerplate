import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";

import App from "common/App";
import { changeTitle } from "common/redux/reducer/title";

function main() {
    const express = Express();
    const port = 8080;

    express.use(Express.static("build"));

    express.get("/", (req, res, next) => {
        const store = Redux.createStore(changeTitle);

        const html = ReactDOM.renderToString(
            <ReactRedux.Provider store={store}>
                <App />
            </ReactRedux.Provider>
        );

        const preloadedState = JSON
            .stringify(store.getState())
            .replace(/</g, "\\u003c");

        res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>TypeScript ReactJS SSR App</title>
                </head>
                <body>
                    <div id="root">${html}</div>
                    <script>
                        window["PRELOADED_STATE"] = ${preloadedState}
                    </script>
                    <script type="application/javascript" src="bundle.js"></script>
                </body>
            </html>
        `);

        res.end();
        next();
    });

    express.listen(port);
}

main();
