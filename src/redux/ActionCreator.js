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
function createState(cleanBoard = createCleanBoard(), pointPosition, snake) {
    debugger
    for (const item of snake) {
        cleanBoard[item.x][item.y] = snakeCell;
    }
    debugger
    cleanBoard[pointPosition.x][pointPosition.y] = pointCell;
    return cleanBoard;
}
function temp(nextCellValue,nextCellCoordinates){
    let newBoardState;
    switch (nextCellValue) {
        case deathBoxCell:
        // dispatch(death);
        case pointCell:
        // grow();
        case freeCell:
            console.log("0")
            // snakeClone.push(nextCellCoordinates);
            // snakeClone.shift();
            debugger
            // newBoardState = createState(createCleanBoard(),
            //     gameState.pointPosition, snakeClone);
    }
    return newBoardState;
}


export function gameIteration(gameState) { //todo replace this logic in to dispatcher
    let snakeHead = gameState.snake[gameState.snake.length - 1];
    let snakeClone = gameState.snake;
    let newBoardState;
    switch (gameState.direction) {
        case top:
            let nextCell = gameState.board[snakeHead.x + 1][snakeHead.y]

        case bot:

    }
    return {type: "iteration", payload: newBoardState};
}

export function directionAction(input) {
    let result = {type: "setDirection"};
    switch (input){
        case top:
            result.payload = top;
        case bot:
            result.payload = bot;
        case right:
            result.payload = right;
        case left:
            result.payload = left;
        default:
            throw "wrong input value";
    }
    return result;
}
