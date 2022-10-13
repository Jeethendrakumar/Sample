import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import App from "./App";
import thunk from 'redux-thunk'
import reducers from './reducers/index'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducers,applyMiddleware(thunk))
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
