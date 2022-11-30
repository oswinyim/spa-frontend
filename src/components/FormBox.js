import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
const Wrapper = styled(Box)(({ theme }) => ({
  flexDirection: "column",
  display: "flex",
  maxWidth: 400,
  alignItems: "center",
  margin: "auto",
  marginTop: 5,
  padding: 40,
  borderRadius: 5,
  boxShadow: "5px 5px 10px #ccc",
  ":hover": {
    boxShadow: "10px 10px 20px #ccc",
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: 700,
  },
}));
const FormBox = (props) => {
  return (
    <Wrapper component="form" onSubmit={props.onSubmit}>
      {props.children}
    </Wrapper>
  );
};

export default FormBox;
