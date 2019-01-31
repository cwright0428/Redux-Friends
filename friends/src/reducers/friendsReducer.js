import { FETCHING_FRIENDS } from "../actions/fetching";

const initialState = [];

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
    default:
      return state;
  }
};
