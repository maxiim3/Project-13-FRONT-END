import React from "react"
import {createRoot} from "react-dom/client"
import "./main.css"
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
	</React.StrictMode>
)
