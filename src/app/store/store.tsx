import React, {ReactNode} from "react"
import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import {userSlicer} from "./user"
import {authSlicer} from "./auth"


export const Store = configureStore({
										reducer: {
											user: userSlicer.reducer,
											auth: authSlicer.reducer,
										},
									})
const StoreProvider = (props: {children: ReactNode}) =>
	<Provider store={Store}>
		{props.children}
	</Provider>

export default StoreProvider
