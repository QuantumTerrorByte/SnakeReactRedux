import React from "react";
import {initialState} from "../InitialState";
import {createCleanBoard} from "../../core/CreateCleanBoard";
import {BOARD_SIZE_INPUT, DEATH_BOX_CELL, FREE_CELL, POINT_CELL, SNAKE_CELL, SPEED_INPUT} from "../../core/Consts";
import {getNextCell} from "../../core/GetNextCell";
import {getNewPoint} from "../../core/GetNewPoint";
import {setSnakeOnBoard} from "../../core/SetSnakeOnBoard";

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case SPEED_INPUT:
            return {...state, speedInputValue: action.payload};
        case BOARD_SIZE_INPUT:
            return {...state, boardSizeInputValue: action.payload};
        case "reset":
            return initialState;
        case "test":
            console.log("!")
            debugger
            return {...state, testValue: !state.testValue};
        case "changeBoardSize":
            return {...state, boardSize: action.payload, board: createCleanBoard(action.payload)}
        case "setDirection":
            return {...state, direction: action.payload}
        case "iteration":
            debugger
            const nextCell = getNextCell(state);
            let snakeCopy;
            let newBoardState;
            switch (nextCell.nextCellValue) {
                case FREE_CELL:
                    snakeCopy = [...state.snake];
                    snakeCopy.push(nextCell.nextCellCoordinates);
                    snakeCopy.shift();
                    debugger
                    newBoardState = setSnakeOnBoard(snakeCopy,
                        createCleanBoard(state.boardSize));
                    newBoardState[state.pointPosition.x][state.pointPosition.y] = POINT_CELL;
                    return {...state, board: newBoardState, snake: snakeCopy};
                case POINT_CELL:
                    snakeCopy = [...state.snake];
                    snakeCopy.push(nextCell.nextCellCoordinates);
                    newBoardState = setSnakeOnBoard(snakeCopy,
                        createCleanBoard(state.boardSize), true);
                    const newPoint = getNewPoint(newBoardState, state.boardSize);
                    newBoardState[newPoint.x][newPoint.y] = POINT_CELL;
                    return {...state, board: newBoardState, snake: snakeCopy, pointPosition: newPoint};
                case DEATH_BOX_CELL:
                case SNAKE_CELL:
                    return {...state, gameOver: true, isAlive: false};
                default:
                    throw "next cell value is not valid";
            }
        default:
            return state;
    }
}



