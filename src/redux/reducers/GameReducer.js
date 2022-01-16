import React from "react";
import {initialState} from "../InitialState";

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case "setDirection":
            return {...state, direction: action.payload}
        case "iteration":
            debugger
            return {...state, board: action.payload};
        case "test":
            console.log("!")
            return {...state, testState: !state.testState}
        default:
            return state;
    }
}