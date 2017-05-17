import * as React from "react";

export interface IPlayerProps{
    name: string;
    result: number;
}
export default class Player extends React.Component<IPlayerProps, {}> {
    render() {
        return (
            <section>
                <h3>{this.props.name}: {this.props.result}</h3>
            </section>
        );
    }
}