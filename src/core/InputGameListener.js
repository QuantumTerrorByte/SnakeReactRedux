import {directionAction} from "../redux/ActionCreator";
import {bot, left, right, top} from "./Consts";
import {store} from "../index";

export function gameInputsListener(e) {
    console.log(e.key);
    switch (e.key) {
        case "w":
            store.dispatch(directionAction(top));
            break;
        case "a":
            store.dispatch(directionAction(left));
            break;
        case "s":
            store.dispatch(directionAction(bot));
            break;
        case "d":
            store.dispatch(directionAction(right));
            break;
    }
}