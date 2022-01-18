import {snakeCell} from "./Consts";

export function setSnakeOnBoard(snake, cleanBoard) {
    for (const item of snake) {
        cleanBoard[item.x][item.y] = snakeCell;
    }
    return cleanBoard;
}