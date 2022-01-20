import {BOT, LEFT, RIGHT, TOP} from "./Consts";

export function getNextCell(gameData) {
    const result = {
        nextCellValue: null,
        nextCellCoordinates: {x: null, y: null}
    };
    const snakeHead = gameData.snake[(gameData.snake.length - 1)];
    let coordinates = null;
    switch (gameData.direction) {
        case TOP:
            coordinates = {x: snakeHead.x, y: snakeHead.y - 1};
            break;
        case BOT:
            coordinates = {x: snakeHead.x, y: snakeHead.y + 1};
            break;
        case LEFT:
            coordinates = {x: snakeHead.x - 1, y: snakeHead.y};
            break;
        case RIGHT:
            coordinates = {x: snakeHead.x + 1, y: snakeHead.y};
            break;
    }
    result.nextCellCoordinates = {x: coordinates.x, y: coordinates.y};
    result.nextCellValue = gameData.board[coordinates.x][coordinates.y];
    return result;
}