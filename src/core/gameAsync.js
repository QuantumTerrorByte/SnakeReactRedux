import {createGameIterationAction, gameOverAction} from "../redux/ActionCreator";
import {sleepAsync} from "./sleepAsync";

export async function gameAsync(store) {
    let gameData = store.getState().gameData;
    while (gameData.isAlive) {
        console.log(gameData);
        store.dispatch(createGameIterationAction());
        await sleepAsync(1000);
        gameData = store.getState().gameData;
        console.log(gameData.isAlive);
    }
    store.dispatch(gameOverAction);
}