import React from "react";
import {initialState} from "../InitialState";
import {createCleanBoard} from "../../core/CreateCleanBoard";
import {
    DEATH_BOX_CELL,
    FREE_CELL,
    POINT_CELL,
    SNAKE_CELL,
    CHANGE_SPEED,
    CHANGE_BOARD_SIZE, GAME_OVER, ITERATION, SET_DIRECTION, RESET, SHOW_OPTIONS, ACCELERATION_ACTIVATION
} from "../../core/Consts";
import {getNextCell} from "../../core/GetNextCell";
import {getNewPoint} from "../../core/GetNewPoint";
import {setSnakeOnBoard} from "../../core/SetSnakeOnBoard";

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SPEED:
            return {...state, gameSpeed: action.payload};
        case ACCELERATION_ACTIVATION:
            return {...state,isAccelerationOn: action.payload}
        case RESET:
            return {
                ...state,
                pointPosition: initialState.pointPosition,
                snake: initialState.snake,
                direction: initialState.direction,
                points: 0,
                isGameStarted: true,
                gameOver: false,
                isAlive: true,
                showOptions: false,
                showResult: false,
            };
        case CHANGE_BOARD_SIZE:
            return {...state, boardSize: action.payload, board: createCleanBoard(action.payload)}
        case SET_DIRECTION:
            return {...state, direction: action.payload, isDirectionUsedSyncFlag: false}
        case ITERATION:
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
                    return {...state, board: newBoardState, snake: snakeCopy, isDirectionUsedSyncFlag: true};
                case POINT_CELL:
                    snakeCopy = [...state.snake];
                    snakeCopy.push(nextCell.nextCellCoordinates);
                    newBoardState = setSnakeOnBoard(snakeCopy,
                        createCleanBoard(state.boardSize), true);
                    const newPoint = getNewPoint(newBoardState, state.boardSize);
                    newBoardState[newPoint.x][newPoint.y] = POINT_CELL;
                    return {
                        ...state,
                        board: newBoardState,
                        snake: snakeCopy,
                        pointPosition: newPoint,
                        isDirectionUsedSyncFlag: true,
                        points: state.points + 1,
                        gameSpeed: state.isAccelerationOn ? state.gameSpeed - state.acceleration : state.gameSpeed
                    };
                case DEATH_BOX_CELL:
                case SNAKE_CELL:
                    return {...state, gameOver: true, isAlive: false, isDirectionUsedSyncFlag: true};
                default:
                    throw "next cell value is not valid";
            }
        case GAME_OVER:
            if (+(localStorage.getItem("bestResult")) < state.points) {
                localStorage.setItem("bestResult", state.points);
            }
            return {...state, showResult: true, gameSpeed: 110};
        case SHOW_OPTIONS:
            return {...state, showResult: false, showOptions: true};
        case "test":
            console.log("!")
            debugger
            return {...state, testValue: !state.testValue};
        default:
            return state;
    }
}


