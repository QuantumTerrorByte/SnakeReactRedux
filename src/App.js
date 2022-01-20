import React from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {Board} from "./components/Board";
import {gameAsync} from "./core/gameAsync";
import {OptionsPanel} from "./components/OptionsPanel";
import {startGame} from "./index";

export function App(props) { //todo get state bug
    debugger
    let store = useStore();
    let gameData = useSelector(s => s.gameData);
    let dispatch = useDispatch();
    debugger
    return (<div>
        <div>
            {gameData.gameOver ? "TRUE" : "FALSE"}
            <button onClick={(e) => {
                gameAsync(store);
                // startGame();
            }}>Game
            </button>
        </div>
        <OptionsPanel speedValue={gameData.speedInputValue}/>
        <Board board={gameData.board}></Board>
        <div>
            {gameData.testValue ? "TRUE" : "FALSE"}
            <button onClick={(e) => {
                dispatch({type: "test"});
            }}>TEST
            </button>
        </div>
        <div>Board size: {gameData.boardSize}</div>
        <div>
            <button onClick={(e) => {
                dispatch({type: "changeBoardSize", payload: 10});
            }}>Size 10
            </button>
        </div>
        <div>
            <button onClick={(e) => {
                dispatch({type: "changeBoardSize", payload: 20});
            }}>Size 20
            </button>
        </div>
    </div>)
}
