import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {Provider} from "react-redux";


// let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        // store={store}
                        // state={state}
                        // dispatch={store.dispatch.bind(store)}
                    />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })

reportWebVitals()
