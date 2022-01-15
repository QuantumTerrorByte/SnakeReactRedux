import React from "react";
import {top} from "../core/core";
import {deathBoxCell, freeCell, pointCell} from "../core/Consts";
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
    if (snake.isArray) {
        snake.for(item => cleanBoard[item.x][item.y] = deathBoxCell);
    }
    cleanBoard[pointPosition.x][pointPosition.y] = pointCell;
    return cleanBoard;
}

export function iteration(gameState) { //todo replace this logic in to dispatcher
    let snakeHead = gameState.snake[gameState.snake.length - 1];
    let newBoardState;
    switch (gameState.direction) {
        case top:
            let nextCell = gameState.board[snakeHead.y + 1][snakeHead.x]
            switch (nextCell) {
                case deathBoxCell:
                    dispatch(death);
                case pointCell:
                    grow();
                case freeCell:
                    gameState.snake.push(nextCell);
                    gameState.snake.shift();
                    createState(createCleanBoard(),gameState.pointPosition,ga)
            }
    }
    return newBoardState;
}