import React from "react"
import {Await, Navigate, Outlet} from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import StoreProvider from "../store/store"
import useMockedAuth from "../../static/mocks/useMockedAuth"
import useMockedUser from "../../static/mocks/useMockedUser"
import {ErrorRoute} from "../routes/routes"

export function AppRoot() {
	const user = useMockedUser(0)
	const auth = useMockedAuth(false)
	return (
		<React.Suspense fallback={<h2>Waiting</h2>}>
			<Await
				resolve={user}
				errorElement={<Navigate to={ErrorRoute.path} />}>
				<StoreProvider>
					<Header />
					<Outlet />
					<Footer />
				</StoreProvider>
			</Await>
		</React.Suspense>
	)
}
