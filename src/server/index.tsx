import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import App from "common/App";
import initReducer from "common/redux/reducer/init";

const expressApp = Express();
const port = 8080;

expressApp.use('/build', Express.static("build"));

expressApp.get("**", (req, res, next) => {
    const store = Redux.createStore(initReducer);
    const html = ReactDOM.renderToString(
        <ReactRedux.Provider store={store}>
            <App />
        </ReactRedux.Provider>
    );

    const preloadedState = store.getState();

    res.send(`
        <!doctype html>
        <html>
            <head>
                <title>TypeScript ReactJS SSR App</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    window["PRELOADED_STATE"] = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/build/bundle.js"></script>
            </body>
        </html>
    `);

    res.end();

    next();
});

expressApp.listen(port);
