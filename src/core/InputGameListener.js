import {directionAction} from "../redux/ActionCreator";
import {BOT, LEFT, RIGHT, TOP} from "./Consts";
import {startGame, store} from "../index";

export function gameInputsListener(e) {
    console.log(e.key);
    switch (e.key) {
        case "w":
            store.dispatch(directionAction(TOP));
            break;
        case "a":
            store.dispatch(directionAction(LEFT));
            break;
        case "s":
            store.dispatch(directionAction(BOT));
            break;
        case "d":
            store.dispatch(directionAction(RIGHT));
            break;
        case " ":
            startGame();
    }
}