import { LIKE_ADVICE } from "./types";
import Storage from "../localStorage.js";

export const likeAdvice = (slip) => (dispatch) => {
  const currentLikes = Storage.getLikes();
  if (currentLikes.length !== null) {
    if (currentLikes.filter((like) => like.id === slip.id).length === 0) {
      Storage.addLike(slip);
      dispatch({
        type: LIKE_ADVICE,
        payload: slip,
      });
    }
  }
};
