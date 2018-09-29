import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter as Router } from "react-router-dom";

import App from "common/App";
import { changeTitle } from "common/redux/reducer/title";

declare const module: any;

function main() {
    const express = Express();
    const port = 8080;

    const store = Redux.createStore(changeTitle);

    express.use(Express.static("build"));

    express.get("/*", (req, res, next) => {
        const sheet = new ServerStyleSheet();
        const appHTML = ReactDOM.renderToString(
            sheet.collectStyles(
                <ReactRedux.Provider store={store}>
                    <Router location={req.path} context={{}}>
                        <App />
                    </Router>
                </ReactRedux.Provider>
            )
        );

        const styleTags = sheet.getStyleTags();
        const preloadedState = JSON.stringify(store.getState()).replace(
            /</g,
            "\\u003c"
        );

        const fullHTML = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>TypeScript ReactJS SSR App</title>
                </head>
                <body>
                    <div id="root">${appHTML}</div>
                    <script>
                        window["__PRELOADED_STATE__"] = ${preloadedState}
                    </script>
                    <script type="application/javascript" src="bundle.js"></script>
                    ${styleTags}
                </body>
            </html>
        `;

        res.send(fullHTML);
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
