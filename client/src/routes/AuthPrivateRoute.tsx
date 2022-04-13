import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";

const AuthPrivateRoute = ({ children }: any) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const getUserBoi = async () => {
		try {
			const token = JSON.parse(localStorage?.getItem("token") as string);
			if (token) {
				dispatch(getUser(token, navigate));
				navigate("/app/today")
			}
		} catch (error) {
			localStorage.removeItem("token");
			navigate("/login");
		}
	};
	useEffect(() => {
		getUserBoi();
	}, [dispatch]);
	return children
};

export default AuthPrivateRoute;
