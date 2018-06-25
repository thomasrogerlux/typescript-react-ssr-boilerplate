import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import App from "common/App";

const expressApp = Express();
const port = 8080;

expressApp.use('/build', Express.static("build"));

expressApp.get("**", (req, res) => {
    const html = ReactDOM.renderToString(<App />);

    res.send(`
        <!doctype html>
        <html>
            <head>
                <title>Ernest</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script src="/build/bundle.js"></script>
            </body>
        </html>
    `);

    res.end();
});

expressApp.listen(port);
