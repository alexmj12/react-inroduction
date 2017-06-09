import * as React from "react";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from "material-ui/svg-icons/content/add";
import ContentRemove from "material-ui/svg-icons/content/remove";
import styled from "styled-components";

export interface IPlayerProps {
    winner: boolean,
    name: string;
    result: number;
    onWin: () => any;
    onLoose: () => any;
}

const style = {
    marginLeft: 20
};

const Content = styled.div`
	background: papayawhip;
	height: 3em;
	width: 30em;

	@media (max-width: 700px) {
		background: palevioletred;
        width: 17em;
	}
`;

export default class Player extends React.Component<IPlayerProps, {}> {
    constructor(props: IPlayerProps, context: any) {
        super(props, context);
    }

    render() {
        return (
            <Content>
                {this.props.name}: {this.props.result}
                <FloatingActionButton mini style={style} onClick={() => this.props.onWin()}><ContentAdd /></FloatingActionButton>
                <FloatingActionButton mini style={style} onClick={this.props.onLoose}><ContentRemove /></FloatingActionButton>
            </Content>
        );
    }
}