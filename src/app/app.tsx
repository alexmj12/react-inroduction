import * as React from "react";

import Player from "./player";
export interface IAppProps {
    game: string;
}

export interface IAppState{
    result1: number,
    result2: number
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps, context: any) {
        super(props, context);

        this.state = {
            result1: 0,
            result2: 0
        }
    }

    render() {
        return (
            <div>
                <h1 onClick={() => this.setState({result1: this.state.result1 + 2 , result2: this.state.result2 +1})}>{this.props.game} result:</h1>
                <Player name="Player 1" result={this.state.result1}/>
                <Player name="Player 2" result={this.state.result2}/>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
};