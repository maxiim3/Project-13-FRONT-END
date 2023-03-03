import Home from "../pages/HomePage"
import {LogInPage} from "../pages/LogInPage"
import {ProfilePage} from "../pages/ProfilePage"
import Error from "../pages/ErrorPage"
import React from "react"
import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom"
import {getRandomKey} from "../functions/getRandomKey()"
import {PATH} from "../config.json"
import {MainLayout} from "../container/MainLayout"
import {StoreProvider} from "../container/StoreProvider"
import {TransactionPage} from "../pages/TransactionPage"

export default createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={PATH.ROOT}
			element={
				<StoreProvider>
					<MainLayout />
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
				path={PATH.TRANSACTION}
				element={<TransactionPage />}
			/>
			<Route
				key={getRandomKey()}
				path={PATH.ERROR}
				element={<Error />}
			/>
		</Route>
	)
)
