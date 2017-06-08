import { observable, action, computed } from "mobx";

export const APP_STORE = "APP_STORE";

export default class AppStore {
    constructor() {
        this.onPlayer1Win = this.onPlayer1Win.bind(this);
        this.onPlayer2Win = this.onPlayer2Win.bind(this);
        this.onPlayer1Loose = this.onPlayer1Loose.bind(this);
        this.onPlayer2Loose = this.onPlayer2Loose.bind(this);
    }
    
    @observable
    title: string = "Game 1";

    @observable
    round: number = 1;

    @observable
    player1: number = 0;

    @observable
    player2: number = 0;

    @computed
    get winner() {
        return this.player1 == this.player2
            ? null
            : this.player1 > this.player2 ? "Player 1" : "Player 2";
    }

    @action
    onPlayer1Win() {
        this.player1 = this.player1 + 1;
        this.round = this.round + 1;
    }

    @action
    onPlayer1Loose() {
        this.player1 = this.player1 - 1;
        this.round = this.round + 1;
    }

    @action
    onPlayer2Win() {
        this.player2 = this.player2 + 1;
        this.round = this.round + 1;
    }

    @action
    onPlayer2Loose() {
        this.player2 = this.player2 - 1;
        this.round = this.round + 1;
    }
}