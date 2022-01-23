import React from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {Board} from "./components/Board";
import {gameAsync} from "./core/gameAsync";
import {OptionsPanel} from "./components/OptionsPanel";
import {startGame} from "./index";
import {ResultPanel} from "./components/ResultPanel";

export function App(props) { //todo get state bug
    // let temp = this.state;
    debugger
    let store = useStore();
    let gameData = useSelector(s => s.gameData);
    let dispatch = useDispatch();
    debugger
    return (<div>
        {gameData.showOptions ? <OptionsPanel props={gameData}/> : null}
        {gameData.showResult ? <ResultPanel props={gameData}/> : null}

        <Board board={gameData.board}></Board>
    </div>)
}
