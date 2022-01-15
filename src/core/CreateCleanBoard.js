import {deathBoxCell, freeCell} from "./Consts";

export function createCleanBoard(boardSize=50) {
    let boardSizeWithMargins = boardSize + 2;
    let board = new Array(boardSizeWithMargins).fill(1)
        .map(() => new Array(boardSizeWithMargins).fill(freeCell));
    for (let i = 0; i < boardSizeWithMargins; i++) {
        for (let j = 0; j < boardSizeWithMargins; j++) {
            if (j == 0 || i == 0 || j == boardSizeWithMargins - 1 || i == boardSizeWithMargins - 1) {
                board[i][j] = deathBoxCell;
            }
        }
    }
}

