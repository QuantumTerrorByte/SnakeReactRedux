import React from "react";
import {initialState} from "../InitialState";
import {createCleanBoard} from "../../core/CreateCleanBoard";
import {deathBoxCell, freeCell, pointCell, snakeCell} from "../../core/Consts";
import {getNextCell} from "../../core/GetNextCell";
import {getNewPoint} from "../../core/GetNewPoint";
import {setSnakeOnBoard} from "../../core/SetSnakeOnBoard";

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case "test":
            console.log("!")
            return {...state, testValue: !state.testValue};
        // return {...state, testState: !state.testState};
        case "setDirection":
            return {...state, direction: action.payload}
        case "iteration":
            debugger
            const nextCell = getNextCell(state);
            let snakeCopy;
            let newBoardState;
            switch (nextCell.nextCellValue) {
                case freeCell:
                    snakeCopy = [...state.snake];
                    snakeCopy.push(nextCell.nextCellCoordinates);
                    snakeCopy.shift();
                    debugger
                    newBoardState = setSnakeOnBoard(snakeCopy,
                        createCleanBoard(state.boardSize));
                    newBoardState[state.pointPosition.x][state.pointPosition.y] = pointCell;
                    return {...state, board: newBoardState, snake: snakeCopy};
                case pointCell:
                    snakeCopy = [...state.snake];
                    snakeCopy.push(nextCell.nextCellCoordinates);
                    newBoardState = setSnakeOnBoard(snakeCopy,
                        createCleanBoard(state.boardSize), true);
                    const newPoint = getNewPoint(newBoardState, state.boardSize);
                    newBoardState[newPoint.x][newPoint.y] = pointCell;
                    return {...state, board: newBoardState, snake: snakeCopy, pointPosition: newPoint};
                case deathBoxCell:
                case snakeCell:
                    return {...state, gameOver: true, isAlive: false};
                default:
                    throw "next cell value is not valid";
            }
        default:
            return state;
    }
}



