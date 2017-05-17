import * as React from "react";

import Player from "./player";
export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Game 1 result:</h1>
                <Player />
                <Player />
            </div>
        );
    }
}