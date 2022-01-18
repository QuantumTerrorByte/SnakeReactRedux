import React from "react";
import {bot, deathBoxCell, freeCell, left, pointCell, right, snakeCell, top} from "../core/Consts";
import {createCleanBoard} from "../core/CreateCleanBoard";


/*
board: seed(),
points: 0,
pointPosition: {x: 20, y: 20},
headPosition: {x: 30, y: 30},
direction: top,
isAlive: true

1 point
0 free
-1 deathBox
*/


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
