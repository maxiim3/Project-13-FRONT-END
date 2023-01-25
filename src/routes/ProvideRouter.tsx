import {RouterProvider} from "react-router-dom"
import React from "react"
import BrowserRouterElements from "./BrowserRouterElements"

export default () => <RouterProvider router={BrowserRouterElements()} />