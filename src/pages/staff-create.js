import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormBox from "../components/FormBox";
import { ACTION_USER_INPUT, ACTION_INPUT_BLUR } from "../constants";
import { createStaff } from "../store/staff-actions";

import {
  emailReducer,
  firstNameReducer,
  lastNameReducer,
  phoneNumberReducer,
  titleReducer,
} from "../reducers/staffCreateReducer";

function StaffCreate() {
  const dispatch = useDispatch();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    errorMessage: null,
  });

  const [firstNameState, dispatchFirstName] = useReducer(firstNameReducer, {
    value: "",
    errorMessage: null,
  });

  const [lastNameState, dispatchLastName] = useReducer(lastNameReducer, {
    value: "",
    errorMessage: null,
  });

  const [phoneNumberState, dispatchPhoneNumber] = useReducer(
    phoneNumberReducer,
    {
      value: "",
      errorMessage: null,
    }
  );
  const [titleState, dispatchTitle] = useReducer(titleReducer, {
    value: "",
    errorMessage: null,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        !emailState.errorMessage &&
          !firstNameState.errorMessage &&
          !lastNameState.errorMessage &&
          !phoneNumberState.errorMessage &&
          !titleState.errorMessage
      );
    }, 300);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState, firstNameState, phoneNumberState, lastNameState, titleState]);

  const navigate = useNavigate();

  const submitHandler = () => {
    if (!formIsValid) return;
    dispatch(
      createStaff({
        title: titleState.value,
        email: emailState.value,
        firstName: firstNameState.value,
        lastName: lastNameState.value,
        phoneNumber: phoneNumberState.value,
      })
    );

    navigate("/staff");
  };
  return (
    <FormBox onSubmit={submitHandler}>
      <Typography variant="h2" padding={3} textAlign="center">
        Create Staff
      </Typography>
      <TextField
        margin="normal"
        type="text"
        variant="outlined"
        label="Title"
        name="title"
        value={titleState.value}
        onChange={(event) => {
          dispatchTitle({
            type: ACTION_USER_INPUT,
            val: event.target.value,
          });
        }}
        onBlur={(event) => {
          dispatchTitle({
            type: ACTION_INPUT_BLUR,
            val: event.target.value,
          });
        }}
        required={true}
        error={!!titleState.errorMessage}
        helperText={titleState.errorMessage}
        fullWidth
      />
      <TextField
        margin="normal"
        type="email"
        variant="outlined"
        label="Email"
        name="email"
        value={emailState.value}
        onChange={(event) => {
          dispatchEmail({ type: ACTION_USER_INPUT, val: event.target.value });
        }}
        onBlur={(event) => {
          dispatchEmail({ type: ACTION_INPUT_BLUR, val: event.target.value });
        }}
        required={true}
        error={!!emailState.errorMessage}
        helperText={emailState.errorMessage}
        fullWidth
      />
      <TextField
        margin="normal"
        type="text"
        variant="outlined"
        label="First Name"
        name="fistName"
        value={firstNameState.value}
        onChange={(event) => {
          dispatchFirstName({
            type: ACTION_USER_INPUT,
            val: event.target.value,
          });
        }}
        onBlur={(event) => {
          dispatchFirstName({
            type: ACTION_INPUT_BLUR,
            val: event.target.value,
          });
        }}
        required={true}
        error={!!firstNameState.errorMessage}
        helperText={firstNameState.errorMessage}
        fullWidth
      />
      <TextField
        margin="normal"
        type="text"
        variant="outlined"
        label="Last Name"
        name="lastName"
        value={lastNameState.value}
        onChange={(event) => {
          dispatchLastName({
            type: ACTION_USER_INPUT,
            val: event.target.value,
          });
        }}
        onBlur={(event) => {
          dispatchLastName({
            type: ACTION_INPUT_BLUR,
            val: event.target.value,
          });
        }}
        required={true}
        error={!!lastNameState.errorMessage}
        helperText={lastNameState.errorMessage}
        fullWidth
      />
      <TextField
        margin="normal"
        type="text"
        variant="outlined"
        label="Phone Number"
        name="phoneNumber"
        value={phoneNumberState.value}
        onChange={(event) => {
          dispatchPhoneNumber({
            type: ACTION_USER_INPUT,
            val: event.target.value,
          });
        }}
        onBlur={(event) => {
          dispatchPhoneNumber({
            type: ACTION_INPUT_BLUR,
            val: event.target.value,
          });
        }}
        required={true}
        error={!!phoneNumberState.errorMessage}
        helperText={phoneNumberState.errorMessage}
        fullWidth
      />
      <Button
        sx={{ marginTop: 3, borderRadius: 3, marginBottom: 5 }}
        variant="contained"
        color="warning"
        type="submit"
        disabled={!formIsValid}
      >
        Create Staff
      </Button>
    </FormBox>
  );
}
export default StaffCreate;
