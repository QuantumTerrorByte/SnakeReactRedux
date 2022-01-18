import React from "react";
import {bot, left, right, top} from "../core/Consts";


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
        case top:
            result.payload = top;
            break;
        case bot:
            result.payload = bot;
            break;
        case right:
            result.payload = right;
            break;
        case left:
            result.payload = left;
            break;
        default:
            throw "wrong input value";
    }
    console.log(result);
    return result;
}
