const { LIKE_ADVICE, FETCH_ADVICE, IS_LOADING } = require("../actions/types");

const initialState = {
  slip: [],
  likes: [],
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIKE_ADVICE: {
      if (
        state.likes.filter((like) => like.id == action.payload.id).length == 0
      ) {
        return { ...state, likes: [...state.likes, action.payload] };
      } else {
        return state;
      }
    }
    case FETCH_ADVICE: {
      // console.log("reducer ran");
      // console.log(action.payload);
      return {
        ...state,
        slip: action.payload,
        isLoading: false,
      };
    }
    case IS_LOADING: {
      return { ...state, isLoading: true };
    }

    default:
      return state;
  }
}
