import React, {useState} from "react";
import {useSelector} from "react-redux";
import styles from './styles/App.module.css';


export function App() {
    let board = useSelector(state => state.board.board);
    console.log(board);
    return <div className={styles.test}>
        {board.map(outerElem => <div className={styles.cellRow}>
            {outerElem.map(innerElem => <div className={styles.cell+" "+styles.blackCell}>{innerElem}</div>)}
        </div>)}
    </div>;
}
