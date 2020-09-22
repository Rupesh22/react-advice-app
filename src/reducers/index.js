import { combineReducers } from "redux";
import adviceReducer from "./adviceReducer.js";

export default combineReducers({
  advice: adviceReducer,
});
