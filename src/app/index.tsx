import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";

import * as Actions from "./actions";
import counter from "./reducers";
import App from "./app";

const store = createStore(counter);

const renderApp = () => render(
  <App 
    game="Game 1"
    result={store.getState()}
    onPlayer1Won={() => store.dispatch({ type: Actions.PLAYER1_WON})}
    onPlayer1Loose={() => store.dispatch({ type: Actions.PLAYER1_LOOSE})}
    onPlayer2Won={() => store.dispatch({ type: Actions.PLAYER2_WON})}
    onPlayer2Loose={() => store.dispatch({ type: Actions.PLAYER2_LOOSE})}
    >
        <h5>Copiright (c) 2017</h5>
    </App>,
  document.getElementById("root")
);

renderApp();
store.subscribe(renderApp);