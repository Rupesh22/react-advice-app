import React from "react";
import "./App.css";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    // Move from materialize to tail-wind CSS
    // make error page
    // react-reval for likes page
    // Fix duplicate like's
    <Provider store={store}>
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
