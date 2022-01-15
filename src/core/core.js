import React from "react";
import {useSelector} from "react-redux";

export const top = "TOP";
export const bot = "BOT";
export const right = "RIGHT";
export const left = "LEFT";

export const game = {
    points: 0,
    pointPosition: {x: 20, y: 20},
    direction: top,
    isAlive: true,
    board: null,

    start: function () {
        this.board = useSelector(s => s.board.board);
        setInterval(()=>{



        },1000);
    },
    iteration: function () {

    }
}