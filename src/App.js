import React from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {Board} from "./components/Board";
import {gameAsync} from "./core/gameAsync";

export function App(props) { //todo get state bug
    debugger
    let store = useStore();
    let stateHook = useSelector(s => s);
    let dispatch = useDispatch();
    debugger
    return (<div>
        <div>
            {stateHook.gameData.testValue ? "TRUE" : "FALSE"}
            <button onClick={(e) => {
                dispatch({type: "test"});
            }}>TEST
            </button>
        </div>
        <div>Board size: {stateHook.gameData.boardSize}</div>
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
        <div>
            {stateHook.gameData.gameOver ? "TRUE" : "FALSE"}
            <button onClick={(e) => {
                console.log("started");
                gameAsync(store);
            }}>Game
            </button>
        </div>
        <Board board={stateHook.gameData.board}></Board>
    </div>)
}
