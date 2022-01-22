import {directionAction} from "../redux/ActionCreator";
import {BOT, LEFT, RIGHT, TOP} from "./Consts";

function blockBackward(store, direction) {
    // console.log(store.getState().gameData.direction);
    // console.log(store.getState().gameData.direction !== direction)
    const gameData= store.getState().gameData;
    return gameData.direction !== direction && gameData.isDirectionUsedSyncFlag;
}
export function gameInputsListener(store) {
    return e => {
        let lastInput = e.key;
        switch (e.key) {
            case TOP:
                if (blockBackward(store,BOT)) {
                    store.dispatch(directionAction(TOP));
                }
                break;
            case LEFT:
                if (blockBackward(store,RIGHT)) {
                    store.dispatch(directionAction(LEFT));
                }
                break;
            case BOT:
                if (blockBackward(store,TOP)) {
                    store.dispatch(directionAction(BOT));
                }
                break;
            case RIGHT:
                if (blockBackward(store,LEFT)) {
                    store.dispatch(directionAction(RIGHT));
                }
                break;
        }
    }
}

