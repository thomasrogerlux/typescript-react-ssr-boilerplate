import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import * as Redux from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter as Router } from "react-router-dom";

import App from "common/App";
import { changeTitle } from "common/redux/reducer/title";

declare const module: any;

function main() {
    const express = Express();
    const port = 8080;

    express.use(Express.static("build"));

    express.get("/*", (req, res, next) => {
        const store = Redux.createStore(changeTitle);
        const sheet = new ServerStyleSheet();

        const appHTML = ReactDOM.renderToString(
            sheet.collectStyles(
                <ReduxProvider store={store}>
                    <Router location={req.path} context={{}}>
                        <App />
                    </Router>
                </ReduxProvider>
            )
        );
        const appCSS = sheet.getStyleTags();
        const appInitialState = JSON.stringify(store.getState()).replace(
            /</g,
            "\\u003c"
        );

        res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>TypeScript ReactJS SSR App</title>
                    <style>
                        body {
                            margin: 0px;
                            padding: 0px;
                        }
                        ${appCSS}
                    </style>
                </head>
                <body>
                    <main id="root">${appHTML}</main>
                    <script>
                        window["__PRELOADED_STATE__"] = ${appInitialState}
                    </script>
                    <script type="application/javascript" src="bundle.js"></script>
                </body>
            </html>
        `);
        res.end();
        next();
    });

    const server = express.listen(port);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => server.close());
    }
}

main();
