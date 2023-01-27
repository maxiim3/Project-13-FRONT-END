import {createNewRoute} from "../functions/createNewRoute"

/**
 * #TRouteElement
 * @description The type of the value returned by the function `functions`
 * @type {ReturnType<typeof createNewRoute>}
 * @example
 * {name: "Home", path: "/", element: <Home />}
 */
export type TRouteElement = ReturnType<typeof createNewRoute>