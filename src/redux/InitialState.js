import React from "react";
import {deathBoxCell, freeCell} from "../core/Consts";
import {createCleanBoard} from "../core/CreateCleanBoard";
import {top} from "../core/Consts"

export const initialState = {
    boardSize: 10,
    board: createCleanBoard(10),
    pointPosition: {x: 9, y: 9},
    points: 0,
    snake: new Array({x: 5, y: 7}, {x: 5, y: 6}),
    direction: top,
    isAlive: true,
    isGameStarted: true,
    gameOver: false,
    testValue: false
}

