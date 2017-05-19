import * as React from "react";

export interface IPlayerProps {
    name: string;
    result: number;
    onWin: () => any;
    onLoose: () => any;
}
export default class Player extends React.Component<IPlayerProps, {}> {
    render() {
        return (
            <section>
                <h3>{this.props.name}: {this.props.result}
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={this.props.onWin}>+</button>
                    <button onClick={this.props.onLoose}>-</button>
                </h3>
            </section>
        );
    }
}