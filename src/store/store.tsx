import React, {ReactNode} from "react"
import {Provider} from "react-redux"
import {configureStore, createSlice} from "@reduxjs/toolkit"
import {T_UserSchema_From_API} from "../api/schema/T_UserSchema"

const authSlicer = createSlice({
	name: "auth",
	initialState: {
		isConnected: false,
		user: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
		},
		setIsConnected: (state, action) => {
			state.isConnected = action.payload
		}
	},
})

const Store = configureStore({
	reducer: {
		auth: authSlicer.reducer,
	},
})

const StoreProvider = (props: {children: ReactNode}) => (
	<Provider store={Store}>{props.children}</Provider>
)

const logUserIn = (user: T_UserSchema_From_API) => dispatch => {
	dispatch(authSlicer.actions.setUser(user))
	dispatch(authSlicer.actions.setIsConnected(true))
}

const logUserOut = () => dispatch => {
	localStorage.clear()
	dispatch(authSlicer.actions.setUser(null))
	dispatch(authSlicer.actions.setIsConnected(false))
}
export {StoreProvider, logUserIn, logUserOut}
