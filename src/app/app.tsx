import * as React from "react";

import Player from "./player";
export interface IAppProps {
    game: string;
}

export interface IAppState {
    result1: number,
    result2: number
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps, context: any) {
        super(props, context);

        this.state = {
            result1: 0,
            result2: 0
        };

        this.onPlayer2Win = this.onPlayer2Win.bind(this);
        this.onPlayer2Loose = this.onPlayer2Loose.bind(this);
    }

    onPlayer2Win(){
        this.setState({ result2: this.state.result2 + 1 });
    }

    onPlayer2Loose(){
        this.setState({ result2: this.state.result2 - 1 });
    }

    render() {
        const winner = this.state.result1 == this.state.result2
            ? null
            : this.state.result1 > this.state.result2 ? "Player 1" : "Player 2";

        return (
            <div>
                <h1>{this.props.game} result:</h1>
                {winner && <section>
                    <h2>Winner {winner}</h2>
                </section>}
                <section>
                    <Player
                        name="Player 1"
                        result={this.state.result1}
                        onWin={() => this.setState({ result1: this.state.result1 + 1 })}
                        onLoose={() => this.setState({ result1: this.state.result1 - 1 })}
                    />
                </section>
                <section>
                    <Player
                        name="Player 2"
                        result={this.state.result2}
                        onWin={this.onPlayer2Win}
                        onLoose={this.onPlayer2Loose}
                    />
                </section>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
};