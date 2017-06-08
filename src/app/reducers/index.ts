import * as Actions from "../actions";

export interface IAppState {
    player1: number,
    player2: number
}

export default (state = { player1: 0, player2: 0 }, action) => {
    switch (action.type) {
        case Actions.PLAYER1_WON:
            return {
                player1: state.player1 + action.value,
                player2: state.player2
            }
        
        case Actions.PLAYER1_LOOSE:
            return {
                player1: state.player1 - action.value,
                player2: state.player2
            }
            
        case Actions.PLAYER2_WON:
            return {
                player1: state.player1,
                player2: state.player2 + action.value
            }
        
        case Actions.PLAYER2_LOOSE:
            return {
                player1: state.player1,
                player2: state.player2 - action.value
            }

        default:
            return state
    }
}