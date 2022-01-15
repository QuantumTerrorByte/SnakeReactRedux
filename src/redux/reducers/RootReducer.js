import React from "react";
import {initialState} from "../InitialState";
import {combineReducers} from "redux";
import {gameReducer} from "./GameReducer";

export const rootReducer = combineReducers({
    gameData: gameReducer

})
