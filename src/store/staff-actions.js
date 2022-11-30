import { uiActions } from "./ui-slice";
import { serviceActions } from "./service-slice";
import axios from "axios";

export const fetchStaffsData = () => {
  return async (dispatch) => {
    dispatch(uiActions.loadingBackdropHandler(true));
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        dispatch(serviceActions.getServices(res.data));
        dispatch(uiActions.loadingBackdropHandler(false));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Get Data Failed",
              message: error.message,
            })
          );
        }
      });
  };
};

export const createStaff = (data) => {
  console.log(data)
  return async (dispatch) => {
    dispatch(uiActions.loadingBackdropHandler(true));
    await axios
      .post(`https://jsonplaceholder.typicode.com/users`, data)
      .then((res) => {
        dispatch(uiActions.loadingBackdropHandler(false));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Create Failed",
              message: error.message,
            })
          );
        }
      });
  };
};

export const deleteStaffs = (ids) => {
  return async (dispatch) => {
    dispatch(uiActions.loadingBackdropHandler(true));
    await axios
      .post(`https://jsonplaceholder.typicode.com/users`, {
        ids,
      })
      .then((res) => {
        dispatch(uiActions.loadingBackdropHandler(false));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Create Failed",
              message: error.message,
            })
          );
        }
      });
  };
};
