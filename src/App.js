import "./App.css";
import Router from "./routes";

import { useSelector, useDispatch } from "react-redux";
import ResponsiveAppBar from "./components/Nav";
import { useEffect, useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";
import LoadingModal from "./components/UI/LoadingBackDrop";

function App() {
  const dispatch = useDispatch();
  // dispatch(authActions.login());
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.ui.isLoading);

  const [mode, setMode] = useState("light");
  const notification = useSelector((state) => state.ui.notification);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      {isAuth && <ResponsiveAppBar />}
      {isLoading && <LoadingModal/>}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Router />
    </ThemeProvider>
  );
}

export default App;
