import {configureStore} from "@reduxjs/toolkit"
import {handleAuthOnLoad} from "../functions/handleAuthOnLoad"
import {authSlice} from "./authSlice"

// @ts-ignore
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/**
 * # Store
 * @description **Redux Store**
 * @type {EnhancedStore<{auth: {isConnected: boolean, user: null}}, AnyAction, [ThunkMiddlewareFor<{auth: {isConnected: boolean, user: null}}>], [StoreEnhancer]>}
 */
export const Store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
	devTools: reduxDevTools,
	preloadedState: await handleAuthOnLoad(),
})
