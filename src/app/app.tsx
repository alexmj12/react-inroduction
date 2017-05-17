import * as React from "react";

import Player from "./player";
export interface IAppProps {
    game: string;
}

export default class App extends React.Component<IAppProps, {}> {
    constructor(props: IAppProps, context: any) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h1>{this.props.game} result:</h1>
                <Player name="Player 1" result={0}/>
                <Player name="Player 2" result={0}/>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
};