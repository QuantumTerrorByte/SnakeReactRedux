import React from "react";
import styles from "../styles/ControlPanel.module.css"
import {useDispatch} from "react-redux";
import {accelerationAction, changeBoardSizeAction, speedInputAction} from "../redux/ActionCreator";
import {startGame} from "../index";

export function OptionsPanel({props}) {
    const dispatch = useDispatch();
    debugger
    console.log(props.boardSize);
    return <div className={styles.controlPanelHolder}>
        <h1>Options</h1>
        <label> board size <br/>
            <input type="number" className={styles.speedInput}
                   onChange={(event) => {
                       console.log(event.target.value)
                       dispatch(changeBoardSizeAction(event.target.value));
                   }}
                   value={props.boardSize}/>
        </label>
        <label> speed <br/>
            <input type="number" className={styles.speedInput}
                   onChange={(event) => {
                       dispatch(speedInputAction(event.target.value));
                   }}
                   value={props.gameSpeed}/>
        </label>
        <label> is walls deadly
            <input type="checkbox"
                   onChange={e => dispatch(accelerationAction(e.target.value))}/>
        </label>
        <button onClick={(e) => {
            startGame()
        }}>start
        </button>
    </div>
}