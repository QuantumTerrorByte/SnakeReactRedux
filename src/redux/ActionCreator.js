import React from "react";
import {BOARD_SIZE_INPUT, BOT, LEFT, RIGHT, SPEED_INPUT, TOP} from "../core/Consts";


export function gameOverAction() {
    return {type: "gameOver"};
}

export function createGameIterationAction(gameState) {
    return {type: "iteration"};
}

export function directionAction(input) {
    debugger
    console.log(input);
    let result = {type: "setDirection"};
    switch (input) {
        case TOP:
            result.payload = TOP;
            break;
        case BOT:
            result.payload = BOT;
            break;
        case RIGHT:
            result.payload = RIGHT;
            break;
        case LEFT:
            result.payload = LEFT;
            break;
        default:
            throw "wrong input value";
    }
    console.log(result);
    return result;
}

export function speedInputAction(value) {
    return {type: SPEED_INPUT, payload: value}
}
 export function boardSizeInputAction(value){
     return{type: BOARD_SIZE_INPUT, payload: value}
 }