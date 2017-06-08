import * as React from "react";
import { IAppState } from "./reducers";

import Player from "./player";
import Timer from "./timer";

export interface IAppActions {
    onPlayer1Won: () => any;
    onPlayer1Loose: () => any;
    onPlayer2Won: () => any;
    onPlayer2Loose: () => any;
}

export interface IAppProps extends IAppActions {
    game: string;
    result: IAppState
}

export default class App extends React.Component<IAppProps, {}> {
    render() {
        const winner = this.props.result.player1 == this.props.result.player2
            ? null
            : this.props.result.player1 > this.props.result.player2 ? "Player 1" : "Player 2";

        if (this.props.result.player1 == 11 || this.props.result.player2 == 11)
            return (<h1>{winner} won !!!</h1>)

        return (
            <div>
                <h1>{this.props.game} result:</h1>
                <Timer round={this.props.result.player1 + this.props.result.player2 + 1}/>
                {winner && <section>
                    <h2>Winning {winner}</h2>
                </section>}
                <section>
                    <Player
                        name="Player 1"
                        result={this.props.result.player1}
                        onWin={this.props.onPlayer1Won}
                        onLoose={this.props.onPlayer1Loose}
                    />
                </section>
                <section>
                    <Player
                        name="Player 2"
                        result={this.props.result.player2}
                        onWin={this.props.onPlayer2Won}
                        onLoose={this.props.onPlayer2Loose}
                    />
                </section>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
};