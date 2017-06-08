import { types } from 'mobx-state-tree';

export interface IGame {
    round: number;
    roundCompleted: () => any;
}

const Game = types.model("Game",
    {
        round: types.number
    },
    {
        roundCompleted() {
            this.round = this.round + 1;
        }
    })

export default Game;