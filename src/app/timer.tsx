import * as React from "react";

export interface ITimerProps {
    round: number;
}

export interface ITimerState {
    now: Date;
}
export default class Timer extends React.Component<ITimerProps, ITimerState> {
    private start: Date;
    private timerId: number;
    constructor(props: ITimerProps, context: any) {
        super(props, context);

        this.start = new Date();

        this.state = {
            now: new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            now: new Date()
        })
    }
    render() {
        return (
            <h2>Round {this.props.round}. Total time: {Math.floor((this.state.now.getTime() - this.start.getTime()) / 1000)} seconds</h2>
        );
    }
}