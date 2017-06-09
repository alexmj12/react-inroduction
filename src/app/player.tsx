import * as React from "react";
import FloatingActionButton  from 'material-ui/FloatingActionButton';
import ContentAdd from "material-ui/svg-icons/content/add";
import ContentRemove from "material-ui/svg-icons/content/remove";

export interface IPlayerProps {
    name: string;
    result: number;
    onWin: () => any;
    onLoose: () => any;
}

const style = {
  marginRight: 20,
};

export default class Player extends React.Component<IPlayerProps, {}> {
    render() {
        return (
            <section>
                <h3>{this.props.name}: {this.props.result}
                    &nbsp;&nbsp;&nbsp;
                    <FloatingActionButton mini style={style} onClick={() => this.props.onWin()}><ContentAdd /></FloatingActionButton>
                    <FloatingActionButton mini style={style} onClick={this.props.onLoose}><ContentRemove /></FloatingActionButton>
                </h3>
            </section>
        );
    }
}