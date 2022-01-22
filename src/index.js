import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {rootReducer} from "./redux/reducers/RootReducer";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reportWebVitals from "./reportWebVitals";
import {render} from "react-dom";
import {App} from "./App";
import {Test} from "./components/TestComponent";
import {gameInputsListener} from "./core/InputGameListener";
import {gameAsync} from "./core/gameAsync";


const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


window.addEventListener('keydown', gameInputsListener(store), false);
export const startGame = () => gameAsync(store);


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

render(app, document.getElementById('root'));
reportWebVitals();
