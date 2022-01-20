import React from "react";
import {DEATH_BOX_CELL, FREE_CELL} from "../core/Consts";
import {createCleanBoard} from "../core/CreateCleanBoard";
import {TOP} from "../core/Consts"

export const initialState = {
    boardSize: 20,
    gameSpeed: 500,
    board: createCleanBoard(20),
    pointPosition: {x: 9, y: 9},
    snake: new Array({x: 5, y: 7}, {x: 5, y: 6}),
    points: 0,
    direction: TOP,
    isAlive: true,
    showOptions: true,
    showResult: false,








    isGameStarted: true,
    gameOver: false,
    testValue: false,
}

