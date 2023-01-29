import React from "react"
import {createRoot} from "react-dom/client"
import "./app/global/main.css"
import {ProvideBrowserRouter} from "./app/routes/routes"
// App.jsx

const rootElement = document.getElementById("root") as HTMLDivElement
const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<ProvideBrowserRouter />
	</React.StrictMode>
)
