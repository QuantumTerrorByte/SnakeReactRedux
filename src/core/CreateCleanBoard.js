import {DEATH_BOX_CELL, FREE_CELL} from "./Consts";

export function createCleanBoard(boardSize) {
    let boardSizeWithMargins = boardSize + 2;
    let board = new Array(boardSizeWithMargins).fill(1)
        .map(() => new Array(boardSizeWithMargins).fill(FREE_CELL));
    for (let i = 0; i < boardSizeWithMargins; i++) { //todo j,i or i,j ???
        for (let j = 0; j < boardSizeWithMargins; j++) {
            if (j === 0 || i === 0 || j === boardSizeWithMargins - 1 || i === boardSizeWithMargins - 1) {
                board[j][i] = DEATH_BOX_CELL;
            }
        }
    }
    return board;
}

