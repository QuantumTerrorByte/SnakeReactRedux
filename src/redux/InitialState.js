import React from "react";
import {createCleanBoard} from "../core/CreateCleanBoard";
import {TOP} from "../core/Consts"

export const initialState = {
    boardSize: 20,
    gameSpeed: 100,
    acceleration: 10,
    isAccelerationOn: false,
    points: 0,
    board: createCleanBoard(20),
    pointPosition: {x: 9, y: 9},
    snake: new Array({x: 5, y: 7}, {x: 5, y: 6}),
    direction: TOP,
    isDirectionUsedSyncFlag: true,
    isAlive: true,
    showOptions: true,
    showResult: false,

    isGameStarted: true,
    gameOver: false,
}
//todo remove dyeing from backward, tp,acceleration,

