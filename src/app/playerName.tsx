import * as React from "react";
import styled from "styled-components";

export interface IPlayerNameProps {
    className?: string;
    name: string;
    winner: boolean;
}

class PlayerName extends React.Component<IPlayerNameProps, {}> {
    constructor(props: IPlayerNameProps, context: any) {
        super(props, context);
    }

    render() {
        return <span className={this.props.className}>{this.props.name}</span>;
    }
};

const PlayerNameStyled = styled(PlayerName) `
   color: ${props => props.winner ? "red": "black"}
`;

export default PlayerNameStyled;