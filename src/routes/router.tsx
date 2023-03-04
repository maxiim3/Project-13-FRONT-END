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
import {InventoryPage} from "../pages/InventoryPage"

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
				path={`${PATH.INVENTORY}`}
				errorElement={<Navigate to={PATH.PROFILE} />}
				element={<InventoryPage />}>
				<Route
					key={getRandomKey()}
					index
					errorElement={<Navigate to={PATH.PROFILE} />}
				/>
				<Route
					key={getRandomKey()}
					path={`${PATH.INVENTORY}/:account`}
					element={<InventoryPage />}
				/>
			</Route>

			<Route
				key={getRandomKey()}
				path={PATH.ERROR}
				element={<Error />}
			/>
		</Route>
	)
)
