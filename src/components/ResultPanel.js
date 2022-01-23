import React from "react";
import styles from "../styles/ControlPanel.module.css";
import {startGame} from "../index";
import {useDispatch} from "react-redux";
import {resetAction, showOptionsAction} from "../redux/ActionCreator";
import {SHOW_OPTIONS} from "../core/Consts";

export function ResultPanel({props}) {
    const dispatch = useDispatch();
    const isNewRecord = +(localStorage.getItem("bestResult")) < props.points;
    // if (isNewRecord) {
    //     localStorage.setItem("bestResult", props.points);
    // }
    return <div className={styles.controlPanelHolder}>
        <h1>Options</h1>
        <div className={styles.rowHolder}>
            <h2>Points current</h2>
            <h2>{props.points}</h2>
        </div>
        <div className={styles.rowHolder}>
            <h2>{isNewRecord ? "New Record" : "Best result"}</h2>
            <h2>{isNewRecord ? props.points : localStorage.getItem("bestResult")}</h2>
        </div>
        <button onClick={e => {
            startGame()
        }}>Restart
        </button>
        <button onClick={e => {
            dispatch(showOptionsAction())
        }}>Options
        </button>
    </div>
}