import {FREE_CELL} from "./Consts";

export function getNewPoint(board, boardSize) {
    debugger
    let newPoint;
    while (true) {
        newPoint = getRandomPoint(boardSize);
        if (board[newPoint.x][newPoint.y] === FREE_CELL) {
            break;
        }
    }
    return newPoint;
}

function getRandomPoint(boardSize) {
    return {
        x: getRandomIntInclusive(1, boardSize),
        y: getRandomIntInclusive(1, boardSize)
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}