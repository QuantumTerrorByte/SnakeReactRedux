import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {rootReducer} from "./redux/reducers/RootReducer";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reportWebVitals from "./reportWebVitals";
import {render} from "react-dom";
import {App} from "./App";
import {createGameIterationAction, gameOverAction} from "./redux/ActionCreator";
import {gameInputsListener} from "./core/InputGameListener";
import {sleepAsync} from "./core/sleepAsync";
import {gameAsync} from "./core/gameAsync";


export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// setInterval(() => {
//     store.dispatch(createGameIterationAction());
// }, 500)




// gameAsync(store);


window.addEventListener('keyup', gameInputsListener, false);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
    </Provider>
);

render(app, document.getElementById('root'));
reportWebVitals();
