export const APP_STORE = "APP_STORE";

export default class AppStore {
    title: string = "Game 1";
    round: number = 1;
    player1: number = 0;
    player2: number = 0;

    get winner() {
        return this.player1 == this.player2
            ? null
            : this.player1 > this.player2 ? "Player 1" : "Player 2";
    }

    onPlayer1Win() {
        this.player1 = this.player1 + 1;
    }

    onPlayer1Loose() {
        this.player1 = this.player1 - 1;
    }

    onPlayer2Win() {
        this.player2 = this.player2 + 1;
    }

    onPlayer2Loose() {
        this.player2 = this.player2 - 1;
    }
}