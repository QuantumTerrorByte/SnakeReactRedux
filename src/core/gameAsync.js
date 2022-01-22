import {createGameIterationAction, gameOverAction, resetAction} from "../redux/ActionCreator";
import {sleepAsync} from "./sleepAsync";

export async function gameAsync(store) {
    store.dispatch(resetAction());
    let gameData = store.getState().gameData;
    console.log(gameData);
    debugger
    while (gameData.isAlive) {
        store.dispatch(createGameIterationAction());
        gameData = store.getState().gameData;
        await sleepAsync(store.getState().gameData.gameSpeed);
    }
    store.dispatch(gameOverAction());
}