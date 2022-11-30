import { ACTION_USER_INPUT, ACTION_INPUT_BLUR } from "../constants";
export const emailReducer = (state, action) => {
  if (action.type === ACTION_USER_INPUT) {
    return {
      value: action.val,
      errorMessage:
        action.val === "root@gmail.com"
          ? null
          : "please enter [root@gmail.com]",
    };
  }
  if (action.type === ACTION_INPUT_BLUR) {
    return {
      value: state.value,
      errorMessage:
        state.value === "root@gmail.com"
          ? null
          : "please enter [root@gmail.com]",
    };
  }
  return { value: "", errorMessage: null };
};

export const passwordReducer = (state, action) => {
  if (action.type === ACTION_USER_INPUT) {
    return {
      value: action.val,
      errorMessage: action.val === "root" ? null : "Wrong, please enter [root]",
    };
  }
  if (action.type === ACTION_INPUT_BLUR) {
    return {
      value: state.value,
      errorMessage:
        state.value === "root" ? null : "Wrong, please enter [root]",
    };
  }
  return { value: "", errorMessage: null };
};
