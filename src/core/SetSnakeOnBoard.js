import {SNAKE_CELL} from "./Consts";

export function setSnakeOnBoard(snake, cleanBoard) {
    for (const item of snake) {
        cleanBoard[item.x][item.y] = SNAKE_CELL;
    }
    return cleanBoard;
}