import * as React from "react";
import { render } from "react-dom";

import App from "./app";

render(
    <App game="Game 1">
        <h5>Copiright (c) 2017</h5>
    </App>,
    document.getElementById("root")
);