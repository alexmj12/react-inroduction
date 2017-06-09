import * as React from "react";
import { ButtonToolbar, Button, ButtonGroup, Panel } from "react-bootstrap";

export interface IPlayerProps {
    name: string;
    result: number;
    onWin: () => any;
    onLoose: () => any;
}

export default class Player extends React.Component<IPlayerProps, {}> {
    render() {
        const header = <b>{this.props.name}: {this.props.result}</b>;
        return (
            <Panel header={header} bsStyle="primary">
                    <ButtonGroup>
                        <Button bsStyle="success" onClick={() => this.props.onWin()}>+</Button>
                        <Button bsStyle="danger" onClick={this.props.onLoose}>-</Button>
                    </ButtonGroup>
                </Panel>
        );
    }
}