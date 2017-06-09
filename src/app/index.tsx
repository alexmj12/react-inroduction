import * as React from "react";
import { render } from "react-dom";
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { connectReduxDevtools } from "mobx-state-tree";
import * as remotedev from "remotedev";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import * as injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import AppStore, { APP_STORE } from "./stores/appStore";
import App from "./app";

useStrict(true);

const appStore = AppStore.create({});
const stores = {
    [APP_STORE]: appStore
};

connectReduxDevtools(remotedev, appStore);



render(
    <Provider {...stores}>
        <MuiThemeProvider>
        <App>
            <h5>Copiright (c) 2017</h5>
        </App>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);