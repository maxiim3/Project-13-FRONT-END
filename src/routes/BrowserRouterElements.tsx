import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom"
import React from "react"
import {Layout} from "../layouts/Layout"
import {PATHS} from "./config/PATHS"
import {ROUTES} from "./config/ROUTES"
import {useRandomKey} from "../hooks/useRandomKey"


export default () => createBrowserRouter(createRoutesFromElements(
	<Route
		path={PATHS.HOME}
		element={<Layout />}
		errorElement={<Navigate to={PATHS.ERROR} />}
	>
		{
			ROUTES.map(({path, component}) => <Route key={useRandomKey()} path={path} element={component} />)
		}
	</Route>,
))

