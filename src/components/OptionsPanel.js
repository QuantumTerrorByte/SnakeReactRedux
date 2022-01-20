import React from "react";
import styles from "../styles/ControlPanel.module.css"
import {useDispatch} from "react-redux";
import {boardSizeInputAction, speedInputAction} from "../redux/ActionCreator";

export function OptionsPanel(props) {
    const dispatch = useDispatch();
    return <div className={styles.controlPanelHolder}>
        <h1>Options</h1>
        <label htmlFor=""> board size <br/>
            <input type="text" className={styles.speedInput}
                   onChange={(event) => {
                       dispatch(boardSizeInputAction(event.target.value));
                   }}
                   value={props.boardSizeInputValue}/>
        </label>
        <label htmlFor=""> speed <br/>
            <input type="text" className={styles.speedInput}
                   onChange={(event) => {
                       dispatch(speedInputAction(event.target.value));
                   }}
                   value={props.speedValue}/>
        </label>
        <button>true</button>
        <button>start</button>
    </div>
}