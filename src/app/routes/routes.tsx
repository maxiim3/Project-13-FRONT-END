import Home from "../pages/home-page"
import Login from "../pages/login-page"
import Profile from "../pages/profile-page"
import Error from "../pages/error-page"
import React from "react"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from "react-router-dom"
import {AppRoot} from "../components/AppRoot"
import {createNewRoute} from "./functions/createNewRoute"
import {useRandomKey} from "../hooks/useRandomKey"

export const RootRoute = createNewRoute({name: "Root", path: "/", element: <AppRoot />})
export const ErrorRoute = createNewRoute({name: "Error", path: "/error", element: <Error />})
export const HomeRoute = createNewRoute({name: "Home", path: "/", element: <Home />})
export const LoginRoute = createNewRoute({name: "Login", path: "/login", element: <Login />})
export const ProfileRoute = createNewRoute({name: "Profil", path: "/profile", element: <Profile />})

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={RootRoute.path}
			element={RootRoute.element}
			errorElement={<Navigate to={ErrorRoute.path} />}>
			<Route
				key={useRandomKey()}
				index
				element={HomeRoute.element}
			/>
			<Route
				key={useRandomKey()}
				path={LoginRoute.path}
				element={LoginRoute.element}
			/>
			<Route
				key={useRandomKey()}
				path={ProfileRoute.path}
				element={ProfileRoute.element}
			/>
			<Route
				key={useRandomKey()}
				path={ErrorRoute.path}
				element={ErrorRoute.element}
			/>
		</Route>
	)
)

export function ProvideBrowserRouter() {
	return (
		<RouterProvider
			router={router}
			fallbackElement={<h2>Waiting</h2>}
		/>
	)
}
