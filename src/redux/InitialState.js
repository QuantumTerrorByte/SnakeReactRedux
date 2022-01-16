import React from "react";
import {deathBoxCell, freeCell} from "../core/Consts";
import {createCleanBoard} from "../core/CreateCleanBoard";
import {top} from "../core/Consts"

export const initialState = {
    board: createCleanBoard(50),
    pointPosition: {y: 25, x: 25},
    // headPosition: {x: 22, y: 20},
    snake: new Array({y: 10, x: 10}, {y: 11, x: 10}, {y: 12, x: 10}),
    points: 0,
    direction: top,
    isAlive: true,
    isGameStarted: false,
    testState: true
};
