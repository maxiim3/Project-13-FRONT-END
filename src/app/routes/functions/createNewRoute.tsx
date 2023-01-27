import {TCreateNewRoutesParams} from "../types/TCreateNewRoutesParams"
import PropTypes from "prop-types"

/**
 * #functions
 * @description Creates a new route object with the given name, path, and React element.
 * @params {Object} - An object containing the properties for the new route.
 * @property {string} name - The name of the route.
 * @type {string}
 * @property {string} path - The path of the route.
 * @type {string}
 * @property {React.ReactElement} element - The React element to be rendered for the route.
 * @type {React.ReactElement}
 * @return {TRouteElement} - The newly created route object.
 * @example
 * functions({name: "Home", path: "/", element: <Home />})
 */
export function createNewRoute({name, path, element}: TCreateNewRoutesParams) {
	return {name, path, element}
}
createNewRoute.propTypes = {
	name: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	element: PropTypes.element.isRequired
};