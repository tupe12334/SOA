import { LOGIN } from "../types";

const initialState = {
  isLoading: false,
  jwt: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
export default authReducer;
