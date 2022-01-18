import React from "react";
import styles from "../styles/App.module.css";
import {useDispatch, useSelector} from "react-redux";

export function Test(props) {
    let board = new Array(10).fill(1).map(() => new Array(10).fill(2));
    let state = useSelector(s=>s);
    let dispatch = useDispatch();
    console.log(state);
    debugger
    return <div>
        <div>HELLO</div>
        <div>
            {state.gameData.testValue ? "TRUE" : "FALSE"}
            <button onClick={(e) => {
                dispatch({type:"test"});
            }}>TEST
            </button>
        </div>
        <div>
            {board.map(outerElem => <div className={styles.cellRow}>
                {outerElem.map(innerElem => <div className={styles.cell + " " + styles.blackCell}>
                    {innerElem}
                </div>)}
            </div>)}
        </div>
    </div>
}