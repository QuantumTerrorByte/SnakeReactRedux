import React from "react";
import {top} from "../core/core";
import {deathBoxCell, freeCell} from "../core/Consts";
import {createCleanBoard} from "../core/CreateCleanBoard";


export const initialState = {
    board: createCleanBoard(50),
    pointPosition: {x: 20, y: 20},
    headPosition: {x: 30, y: 30},
    snake: new Array({x: 20, y: 20},{x: 21, y: 20},{x: 22, y: 20}),
    points: 0,
    direction: top,
    isAlive: true,
    isGameStarted: false,
};

function seed() {
    let board = new Array(52).fill(1).map(() => new Array(52).fill(freeCell));
    return board;
}