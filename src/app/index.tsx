import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";

import * as Actions from "./actions";
import counter from "./reducers";
import App from "./app";

const store = createStore(counter, /* preloadedState, */
   window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"]()
   );


const renderApp = () => render(
    <App
        game="Game 1"
        result={store.getState()}
        onPlayer1Won={() => store.dispatch({ type: Actions.PLAYER1_WON, value: 1 })}
        onPlayer1Loose={() => store.dispatch({ type: Actions.PLAYER1_LOOSE, value: 1 })}
        onPlayer2Won={() => store.dispatch({ type: Actions.PLAYER2_WON, value: 1 })}
        onPlayer2Loose={() => store.dispatch({ type: Actions.PLAYER2_LOOSE, value: 1 })}
    >
        <h5>Copiright (c) 2017</h5>
    </App>,
    document.getElementById("root")
);

renderApp();
store.subscribe(renderApp);