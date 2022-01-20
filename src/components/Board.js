import React from "react";
import styles from "../styles/App.module.css";

export function Board({board}) {
    debugger;
    console.log(board);
    let keyGenerator = 0;
    return <div className={styles.boardHolder}>
        <div className={styles.board}>
            {board.map(outerElem => <div key={keyGenerator++} className={styles.cellRow}>
                {outerElem.map(innerElem => <div key={keyGenerator++} className={styles.cell + " " + styles.blackCell}>
                    {innerElem}
                </div>)}
            </div>)}
        </div>
    </div>
}