import React from "react"

/**
 * #TParams
 * @description Defines the shape of the object that is passed as the parameter to the function `functions`.
 * @type {Object}
 * @property {string} name - The name of the route.
 * @property {string} path - The path of the route.
 * @property {React.ReactElement} element - The React element to be rendered for the route.
 * @example
 * {name: "Home", path: "/", element: <Home />}
 */
export type TCreateNewRoutesParams = {
	name: string
	path: string
	element: React.ReactElement
}