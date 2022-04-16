import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../actions/user";
import { useDispatch } from "react-redux";
import Loader from "../pages/Loader";

const PrivateRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getUserBoi = async () => {
    try {
      const token = JSON.parse(localStorage?.getItem("token") as string);
      if (!token) {
        navigate("/login");
        setLoading(false);
      } else {
        dispatch(getUser(token, navigate, setLoading));
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

export default PrivateRoute;
