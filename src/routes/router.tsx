import Home from "../app/pages/home-page/Home"
import {SignInPage} from "../app/pages/login-page/SignInPage"
import {ProfilePage} from "../app/pages/profile-page/ProfilePage"
import Error from "../app/pages/error-page/Error"
import React from "react"
import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom"
import {getRandomKey} from "../utils/getRandomKey()"
import {PATH} from "../config.json"
import {Store} from "../store/store"
import {Provider} from "react-redux"
import {LayoutContainer} from "../app/containers/layout/LayoutContainer"

export default createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={PATH.ROOT}
			element={
				<Provider store={Store}>
					<LayoutContainer />
				</Provider>
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
				element={<SignInPage />}
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
