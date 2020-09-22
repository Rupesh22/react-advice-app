import { LIKE_ADVICE } from "./types";

export const likeAdvice = (slip) => ({
  type: LIKE_ADVICE,
  payload: slip,
});
