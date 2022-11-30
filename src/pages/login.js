import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { authActions } from "../store/auth";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FormBox from "../components/FormBox";
import { emailReducer, passwordReducer } from "../reducers/loginReducer";
import { ACTION_USER_INPUT, ACTION_INPUT_BLUR } from "../constants";

function Login() {
  const [formIsValid, setFormIsValid] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "root@gmail.com",
    errorMessage: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    errorMessage: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
  }, [isAuth, navigate]);

  //debounce
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(!emailState.errorMessage && !passwordState.errorMessage);
    }, 300);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: ACTION_USER_INPUT, val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: ACTION_USER_INPUT, val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: ACTION_INPUT_BLUR });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: ACTION_INPUT_BLUR });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    if (emailState.value !== "root@gmail.com" || passwordState.value !== "root")
      return;
    dispatch(authActions.login(emailState.value));
  };

  return (
    <FormBox onSubmit={loginHandler}>
      <Typography variant="h2" padding={3} textAlign="center">
        Login
      </Typography>
      <TextField
        margin="normal"
        type="email"
        variant="outlined"
        label="Email"
        name="email"
        value={emailState.value}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        required={true}
        error={!!emailState.errorMessage}
        helperText={emailState.errorMessage}
      />
      <TextField
        margin="normal"
        type="password"
        variant="outlined"
        name="password"
        value={passwordState.value}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        required={true}
        error={!!passwordState.errorMessage}
        helperText={passwordState.errorMessage}
        label="Password"
      />
      <Button
        sx={{ marginTop: 3, borderRadius: 3 }}
        variant="contained"
        color="warning"
        type="submit"
        disabled={!formIsValid}
      >
        Login
      </Button>
    </FormBox>
  );
}
export default Login;
