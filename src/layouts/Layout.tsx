import React from "react"
import {Outlet} from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import StoreProvider from "../store/store"

export function Layout() {
	return (
		<>
			<StoreProvider>
				<Header />
				<Outlet />
				<Footer />
			</StoreProvider>
		</>
	)
}