import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {rootReducer} from "./redux/reducers/RootReducer";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reportWebVitals from "./reportWebVitals";
import {render} from "react-dom";
import {App} from "./App";
import * as ReactDOM from "react-dom";
import {gameIteration} from "./redux/ActionCreator";


export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

setInterval(() => {
    store.dispatch(gameIteration({...store.getState().gameData}));
    console.log(store.getState())
}, 1000)


async function temp() {
    while (true) {
        await setTimeout(() => {
            console.log("as@@@@@@@@@d")
        }, 2000)
    }
}
temp();

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App dispatcher={store.dispatch}/>
        </BrowserRouter>
    </Provider>
);

render(app, document.getElementById('root'));
reportWebVitals();
