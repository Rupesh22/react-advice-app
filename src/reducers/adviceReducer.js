import Storage from "../localStorage.js";
const {
  LIKE_ADVICE,
  FETCH_ADVICE,
  IS_LOADING,
  FETCH_LIKES,
} = require("../actions/types");

const initialState = {
  slip: [],
  likes: [],
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIKE_ADVICE: {
      const allLikes = Storage.getLikes();
      return { ...state, likes: [...allLikes] };
    }
    case FETCH_ADVICE: {
      return {
        ...state,
        slip: action.payload,
        isLoading: false,
      };
    }
    case IS_LOADING: {
      return { ...state, isLoading: true };
    }
    case FETCH_LIKES: {
      console.log("FETCH_LIKES ran");
      const allLikes = Storage.getLikes();
      return { ...state, likes: [...allLikes] };
    }

    default:
      return state;
  }
}
