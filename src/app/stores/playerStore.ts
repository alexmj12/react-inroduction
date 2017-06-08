import { types, getParent } from 'mobx-state-tree';
import { IAppStore } from "./appStore";

export interface IPlayer {
    parent: IAppStore;
    name: string;
    result: number;

    onWin: () => any;
    onLoose: () => any;
}

const Player = types.model("Player",
    {
        name: types.string,
        result: types.number,
        get parent(){
            return getParent(this);
        }
    },
    {
        onWin() {
            const store = <IPlayer>this;

            store.result = store.result + 1;
            store.parent.game.roundCompleted();
        },
        onLoose() {
            const store = <IPlayer>this;

            store.result = store.result - 1;
            store.parent.game.roundCompleted();
        }
    })

export default Player;