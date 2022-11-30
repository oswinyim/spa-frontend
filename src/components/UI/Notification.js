import { Alert, AlertTitle } from "@mui/material";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const Notification = (props) => {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(uiActions.clearNotification());
  };
  return (
    <section>
      <Alert
        sx={{
          margin: "0 10% 5% 10%",
        }}
        severity={props.status}
        onClose={onCloseHandler}
      >
        <AlertTitle>{props.title}</AlertTitle>
        {props.message}
      </Alert>
    </section>
  );
};

export default Notification;
