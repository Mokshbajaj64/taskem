import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../actions/user";
import { useDispatch } from "react-redux";
import Loader from "../pages/Loader";

const AuthPrivateRoute = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserBoi = async () => {
    try {
      const token = JSON.parse(localStorage?.getItem("token") as string);
      if (token) {
        dispatch(getUser(token, navigate, setLoading));
        navigate("/app/today");
      } else {
        setLoading(false);
      }
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/login");
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserBoi();
  }, [dispatch]);
  return loading ? <Loader /> : children;
};

export default AuthPrivateRoute;
