import { Backdrop, CircularProgress } from "@mui/material";

import React from "react";
const LoadingBackDrop = (props) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default LoadingBackDrop;
