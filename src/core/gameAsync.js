import {createGameIterationAction, gameOverAction} from "../redux/ActionCreator";
import {sleepAsync} from "./sleepAsync";

export async function gameAsync(store) {
    let state = store.getState().gameData;
    while (state.isAlive) {
        console.log(state);
        store.dispatch(createGameIterationAction());
        await sleepAsync(1000);
        state = store.getState().gameData;
        console.log(state.isAlive);
    }
    store.dispatch(gameOverAction);
}