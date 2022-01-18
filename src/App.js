import React from "react";
import styles from './styles/App.module.css';
import {gameAsync} from "./core/gameAsync";
import {Board} from "./components/Board";


export function App({store}) {
    const gameData = store.getState().gameData;
    console.log(gameData);
    console.log("FROM APP");
    return <div>
        <div>
            {gameData.testValue ? "TRUE" : "FALSE"}
            <button onClick={(e) => {
                store.dispatch({type:"test"});
            }}>TEST
            </button>
        </div>
        <div>
            {gameData.gameOver ? "TRUE" : "FALSE"}
            <button onClick={(e) => {
                console.log("started");
                gameAsync(store);
            }}>Game
            </button>
        </div>
        <Board board={gameData.board}></Board>
    </div>;
}
