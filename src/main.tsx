import React from "react"
import {createRoot} from "react-dom/client"
import "./sass/main.css"
import router from "./routes/router"
import {RouterProvider} from "react-router-dom"

const rootElement = document.getElementById("root") as HTMLDivElement
const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<RouterProvider
			router={router}
			fallbackElement={<h2>Waiting</h2>}
		/>
	</React.StrictMode>,
)


// authorization : "Bearer token"
// api give only user info
// mock transaction data


// store implementation.
// http service in reducer
// save token and user info
// save transaction data
// mocked from public/transaction.json
// implement endpoint to get transaction data
// create YAML file to mock data
// optional: create endpoint to get transaction data
// optional:  implement Database
