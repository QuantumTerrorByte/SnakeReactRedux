import {DEATH_BOX_CELL, FREE_CELL, POINT_CELL, SNAKE_CELL} from "./Consts";
import styles from "../styles/App.module.css";

export function colorize(value){
    switch (value){
        case DEATH_BOX_CELL:
            return styles.blackCell;
        case SNAKE_CELL:
            return styles.blueCell;
        case POINT_CELL:
            return styles.redCell;
        case FREE_CELL:
            return styles.whiteCell;
    }
}