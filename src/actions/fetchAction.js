import { FETCH_ADVICE, IS_LOADING } from "./types";
import axios from "axios";

export const fetchAdvice = () => (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios
    .get(`https://api.adviceslip.com/advice`)
    .then((response) => {
      dispatch({
        type: FETCH_ADVICE,
        payload: response.data.slip,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
