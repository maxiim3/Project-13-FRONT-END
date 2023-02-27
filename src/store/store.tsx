import {configureStore} from "@reduxjs/toolkit"
import {handleAuthOnLoad} from "./auth/state/handleAuthOnLoad"
import {authSlicer} from "./auth/authSlicer"

export const Store = configureStore({
	reducer: {
		auth: authSlicer.reducer,
	},
	devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	preloadedState: await handleAuthOnLoad(),
})

