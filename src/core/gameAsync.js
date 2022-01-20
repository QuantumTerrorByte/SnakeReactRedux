import {createGameIterationAction, gameOverAction} from "../redux/ActionCreator";
import {sleepAsync} from "./sleepAsync";

export async function gameAsync(store) {
    store.dispatch({type: "reset"});
    let gameData = store.getState().gameData;
    debugger
    while (gameData.isAlive) {
        console.log(gameData);
        store.dispatch(createGameIterationAction());
        await sleepAsync(store.getState().gameData.gameSpeed);
        gameData = store.getState().gameData;
        console.log(gameData.isAlive);
    }
    store.dispatch(gameOverAction);
}