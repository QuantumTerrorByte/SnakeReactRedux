import React from "react";
import styles from "../styles/App.module.css";

export function Test() {
    let board = new Array(10).fill(1).map(() => new Array(10).fill(2));
    debugger
    return <div>
        <div>HELLO</div>
        <div>
            {board.map(outerElem => <div className={styles.cellRow}>
                {outerElem.map(innerElem => <div className={styles.cell + " " + styles.blackCell}>
                    {innerElem}
                </div>)}
            </div>)}
        </div>
    </div>
}