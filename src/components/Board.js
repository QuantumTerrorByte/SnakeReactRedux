import React from "react";
import styles from "../styles/App.module.css";
import {DEATH_BOX_CELL, FREE_CELL, POINT_CELL, SNAKE_CELL} from "../core/Consts";
import {colorize} from "../core/Colorize";

export function Board({board}) {
    debugger;
    // console.log(board);
    let keyGenerator = 0;
    return <div className={styles.boardHolder}>
        <div className={styles.board}>
            {board.map(outerElem => <div key={keyGenerator++} className={styles.cellRow}>
                {outerElem.map(innerElem => <div key={keyGenerator++} className={styles.cell + " " + colorize(innerElem)}>
                    {innerElem}
                </div>)}
            </div>)}
        </div>
    </div>
}

