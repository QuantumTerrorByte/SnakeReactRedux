import React from "react";
import styles from "../styles/ControlPanel.module.css";
import {startGame} from "../index";
import {useDispatch} from "react-redux";
import {resetAction, showOptionsAction} from "../redux/ActionCreator";
import {SHOW_OPTIONS} from "../core/Consts";

export function ResultPanel({props}) {
    const dispatch = useDispatch();
    return <div className={styles.controlPanelHolder}>
        <h1>Options</h1>
        <div>
            <h3>Points current</h3>
            <h3>props.points</h3>
        </div>
        <div>
            <h3>Best result</h3>
            <h3>25</h3>
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