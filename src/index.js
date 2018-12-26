import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import First from "./Route";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppWithRouter = () => (
  <BrowserRouter>
    <First />
  </BrowserRouter>
);

const AppRouterWithStore = () => (
  <Provider store={store}>
    <AppWithRouter />
  </Provider>
);

ReactDOM.render(<AppRouterWithStore />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
