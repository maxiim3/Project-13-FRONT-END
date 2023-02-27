import Home from "../app/pages/home-page/Home"
import {LogInPage} from "../app/pages/login-page/LogInPage"
import {ProfilePage} from "../app/pages/profile-page/ProfilePage"
import Error from "../app/pages/error-page/Error"
import React from "react"
import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom"
import {getRandomKey} from "../utils/getRandomKey()"
import {PATH} from "../config.json"
import {LayoutContainer} from "../app/containers/layout/LayoutContainer"
import {StoreProvider} from "../store/components/StoreProvider"

export default createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={PATH.ROOT}
			element={
				<StoreProvider>
					<LayoutContainer />
				</StoreProvider>
			}
			errorElement={<Navigate to={PATH.ERROR} />}>
			<Route
				key={getRandomKey()}
				index
				element={<Home />}
			/>
			<Route
				key={getRandomKey()}
				path={PATH.LOGIN}
				element={<LogInPage />}
			/>
			<Route
				key={getRandomKey()}
				path={PATH.PROFILE}
				element={<ProfilePage />}
			/>
			<Route
				key={getRandomKey()}
				path={PATH.ERROR}
				element={<Error />}
			/>
		</Route>
	)
)
