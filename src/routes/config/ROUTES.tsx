import {IRoutes} from "./IRoutes"
import Home from "../../pages/home-page/Home"
import Login from "../../pages/login-page/Login"
import Profile from "../../pages/profile-page/Profile"
import Error from "../../pages/error-page/Error"
import React from "react"
import {PATHS} from "./PATHS"

export const ROUTES: IRoutes[] = [
	{
		name: "Home",
		path: PATHS.HOME,
		component: <Home />,
	},
	{
		name: "Login",
		path: PATHS.LOGIN,
		component: <Login />,
	},
	{
		name: "Profil",
		path: PATHS.PROFILE,
		component: <Profile />,
	},
	{
		name: "Error",
		path: PATHS.ERROR,
		component: <Error />,
	},
]