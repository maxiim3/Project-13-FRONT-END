import Home from "../pages/home/Home"
import {LoginPage} from "../pages/auth/LoginPage"
import {ProfilePage} from "../pages/user/ProfilePage"
import Error from "../pages/error/Error"
import React from "react"
import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom"
import {getRandomKey} from "../utils/getRandomKey()"
import {PATH} from "../config.json"
import {Store} from "../store/store"
import {Provider} from "react-redux"
import {AuthStateHandler} from "../components/AuthStateHandler"

export default createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={PATH.ROOT}
			element={
				<Provider store={Store}>
					<AuthStateHandler />
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
				element={<LoginPage />}
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
