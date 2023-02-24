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
		},
	},
})
export const Store = configureStore({
	reducer: {
		auth: authSlicer.reducer,
	},
})

export const A_SetUser = (user: T_UserSchema_From_API | null) => authSlicer.actions.setUser(user)
export const A_SetAuth = (value: boolean) => authSlicer.actions.setIsConnected(value)
