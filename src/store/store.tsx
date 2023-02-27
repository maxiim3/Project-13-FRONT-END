import {configureStore} from "@reduxjs/toolkit"
import {handleAuthOnLoad} from "./auth/functions/handleAuthOnLoad"
import {authSlicer} from "./auth/authSlicer"

// @ts-ignore
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const Store = configureStore({
	reducer: {
		auth: authSlicer.reducer,
	},
	devTools: reduxDevTools,
	preloadedState: await handleAuthOnLoad(),
})
