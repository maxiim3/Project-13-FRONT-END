import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom"
import React from "react"
import {Layout} from "../layouts/Layout"
import Home from "../pages/home-page/Home"
import {SignIn} from "../pages/sign-in-page/SignIn"
import {User} from "../pages/user-page/User"

export const RoutesElement = () => createBrowserRouter(createRoutesFromElements(
	<Route
		path={"/"}
		element={<Layout />}
		errorElement={<Navigate to={"/error"} />}
	>
		<Route
			path={"/"}
			element={<Home />}
		/>
		<Route
			path={"/sign-in"}
			element={<SignIn />}
		/>
		<Route
			path={"/user"}
			element={<User />}
		/>
		<Route
			path={"/error"}
			element={<div>404</div>} // todo extract in component and add css
		/>
	</Route>,
))

export const ProvideRouter = () => <RouterProvider router={RoutesElement()} />

