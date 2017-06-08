import * as React from "react";
import { render } from "react-dom";
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import AppStore, { APP_STORE } from "./stores/appStore";
import App from "./app";

useStrict(true);

const stores = {
    [APP_STORE]: new AppStore()
};

render(
    <Provider {...stores}>
        <App>
            <h5>Copiright (c) 2017</h5>
        </App>
    </Provider>,
    document.getElementById("root")
);