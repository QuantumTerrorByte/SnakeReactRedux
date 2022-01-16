import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from './styles/App.module.css';
import {directionAction} from "./redux/ActionCreator";
import {bot, left, right, top} from "./core/Consts";


export function App(props) {
    let gameData = useSelector(state => state.gameData);
    let testState = gameData.testState;
    let dispatcher = useDispatch();
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case "w":
                dispatcher(directionAction(top));
            case "a":
                dispatcher(directionAction(left));
            case "s":
                dispatcher(directionAction(bot));
            case "d":
                dispatcher(directionAction(right));
        }
    });
    console.log(gameData);
    console.log(props);
    return <div>
        <div>
            {testState ? "TRUE" : "FALSE"}
            <button onClick={() => {
                props.dispatcher({type: "test"})
            }}>TEST
            </button>
        </div>
        <div className={styles.test}>
            {gameData.board.map(outerElem => <div className={styles.cellRow}>
                {outerElem.map(innerElem => <div className={styles.cell + " " + styles.blackCell}>
                    {innerElem}
                </div>)}
            </div>)}
        </div>
    </div>;
}
