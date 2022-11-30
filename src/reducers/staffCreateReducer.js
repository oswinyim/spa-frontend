import { ACTION_USER_INPUT, ACTION_INPUT_BLUR } from "../constants";
import { ValidateEmail, ValidatePhoneNumber } from "../ultils";

export const emailReducer = (state, action) => {
  if (action.type === ACTION_USER_INPUT) {
    return {
      value: action.val,
      errorMessage: ValidateEmail(action.val)
        ? null
        : "Please enter valid Email",
    };
  }
  if (action.type === ACTION_INPUT_BLUR) {
    return {
      value: state.value,
      errorMessage: ValidateEmail(state.value)
        ? null
        : "Please enter valid Email",
    };
  }
  return { value: "", errorMessage: null };
};

export const firstNameReducer = (state, action) => {
  if (action.type === ACTION_USER_INPUT) {
    return {
      value: action.val,
      errorMessage:
        action.val.length > 3 ? null : "Please enter more than 4 characters",
    };
  }
  if (action.type === ACTION_INPUT_BLUR) {
    return {
      value: state.value,
      errorMessage:
        state.value.length > 3 ? null : "Please enter more than 4 characters",
    };
  }
  return { value: "", errorMessage: null };
};

export const lastNameReducer = (state, action) => {
  if (action.type === ACTION_USER_INPUT) {
    return {
      value: action.val,
      errorMessage:
        action.val.length > 3 ? null : "Please enter more than 4 characters",
    };
  }
  if (action.type === ACTION_INPUT_BLUR) {
    return {
      value: state.value,
      errorMessage:
        state.value.length > 3 ? null : "Please enter more than 4 characters",
    };
  }
  return { value: "", errorMessage: null };
};

export const phoneNumberReducer = (state, action) => {
  if (action.type === ACTION_USER_INPUT) {
    return {
      value: action.val,
      errorMessage: ValidatePhoneNumber(action.val)
        ? null
        : "Please enter 10 digits",
    };
  }
  if (action.type === ACTION_INPUT_BLUR) {
    return {
      value: state.value,
      errorMessage: ValidatePhoneNumber(state.value)
        ? null
        : "Please enter 10 digits",
    };
  }
  return { value: "", errorMessage: null };
};

export const titleReducer = (state, action) => {
  if (action.type === ACTION_USER_INPUT) {
    return {
      value: action.val,
      errorMessage:
        action.val.length > 3 ? null : "Please enter more than 4 characters",
    };
  }
  if (action.type === ACTION_INPUT_BLUR) {
    return {
      value: state.value,
      errorMessage:
        state.value.length > 3 ? null : "Please enter more than 4 characters",
    };
  }
  return { value: "", errorMessage: null };
};