import React from "react";
import {DEATH_BOX_CELL, FREE_CELL} from "../core/Consts";
import {createCleanBoard} from "../core/CreateCleanBoard";
import {TOP} from "../core/Consts"

export const initialState = {
    boardSize: 10,
    board: createCleanBoard(10),
    pointPosition: {x: 9, y: 9},
    points: 0,
    snake: new Array({x: 5, y: 7}, {x: 5, y: 6}),
    direction: TOP,
    gameSpeed: 500,
    isAlive: true,
    isGameStarted: true,
    gameOver: false,
    testValue: false,
    speedInputValue: "",
    boardSizeInputValue: "",
}

