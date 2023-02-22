import Home from "../pages/home-page"
import {LoginPage} from "../pages/login-page/LoginPage"
import {ProfilePage} from "../pages/profile-page/ProfilePage"
import Error from "../pages/error-page"
import React from "react"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Outlet,
	Route,
} from "react-router-dom"
import {useRandomKey} from "../hooks/useRandomKey"
import {PATH} from "../config.json"
import {StoreProvider} from "../store/store"
import {LoaderBuffer} from "../components/LoaderBuffer"

export default createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={PATH.ROOT}
			element={
				<StoreProvider>
					<LoaderBuffer>
						<Outlet />
					</LoaderBuffer>
				</StoreProvider>
			}
			errorElement={<Navigate to={PATH.ERROR} />}>
			<Route
				key={useRandomKey()}
				index
				element={<Home />}
			/>
			<Route
				key={useRandomKey()}
				path={PATH.LOGIN}
				element={<LoginPage />}
			/>
			<Route
				key={useRandomKey()}
				path={PATH.PROFILE}
				element={<ProfilePage />}
			/>
			<Route
				key={useRandomKey()}
				path={PATH.ERROR}
				element={<Error />}
			/>
		</Route>
	)
)
