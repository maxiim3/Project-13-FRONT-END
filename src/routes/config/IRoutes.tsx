import React from "react"
import {PATHS} from "./PATHS"

export interface IRoutes {
	name: string,
	path: PATHS,
	component: React.ReactElement,
}