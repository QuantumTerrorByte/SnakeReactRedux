import React from "react";
import {BOT, LEFT, RIGHT, CHANGE_SPEED, TOP, CHANGE_BOARD_SIZE} from "../core/Consts";


export function gameOverAction() {
    return {type: "gameOver"};
}

export function createGameIterationAction(gameState) {
    return {type: "iteration"};
}

export function directionAction(input) {
    debugger
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
    return result;
}

export function speedInputAction(value) {
    return {type: CHANGE_SPEED, payload: value}
}
 export function changeBoardSizeAction(value){
     return{type: CHANGE_BOARD_SIZE, payload: value}
 }