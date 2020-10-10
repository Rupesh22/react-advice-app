import React from "react";
import "./App.css";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    // make error page
    <Provider store={store}>
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
