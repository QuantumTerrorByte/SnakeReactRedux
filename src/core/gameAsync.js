import {createGameIterationAction, gameOverAction} from "../redux/ActionCreator";
import {sleepAsync} from "./sleepAsync";

export async function gameAsync(store) {
    store.dispatch({type: "reset"});
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