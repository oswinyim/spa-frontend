import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(authActions.logout());
    navigate("/login");
  }, [navigate, dispatch]);

  return <div></div>;
};

export default Logout;
