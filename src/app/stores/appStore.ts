import { types } from 'mobx-state-tree';

import GameStore, { IGame } from "./gameStore";
import PlayerStore, { IPlayer } from "./playerStore";

export const APP_STORE = "APP_STORE";

export interface IAppStore {
    winner: string;
    game: IGame,
    player1: IPlayer,
    player2: IPlayer
}

const AppStore = types.model(APP_STORE,
    {
        game: types.optional(GameStore, { round: 1 }),
        player1: types.optional(PlayerStore, { name: "Player 1", result: 0 }),
        player2: types.optional(PlayerStore, { name: "Player 2", result: 0 }),

        get winner() {
            const store = (<IAppStore>this);

            return store.player1.result == store.player2.result
                ? ""
                : store.player1.result > store.player2.result ? store.player1.name : store.player2.name;
        }
    },
    {
    })

export default AppStore;