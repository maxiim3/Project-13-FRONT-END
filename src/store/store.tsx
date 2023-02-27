import {configureStore, createSlice} from "@reduxjs/toolkit"
import {T_UserSchema_From_API} from "../api/schema/T_UserSchema"
import getUserProfile from "../api/getUserProfile"

const initialState = {
	isConnected: false,
	user: null,
}

type T_AuthSlice = {
	auth?:
		| {
				isConnected: boolean
				user: null
		  }
		| undefined
}
const handleAuthOnLoad = async (): Promise<T_AuthSlice> => {
	const token = localStorage.getItem("token")
	const noUser = {
		auth: {
			isConnected: false,
			user: null,
		},
	}
	if (!token) return noUser
	try {
		const response = await getUserProfile()
		const user = response.data.body
		return {
			auth: {
				isConnected: true,
				user: user,
			},
		}
	} catch (error) {
		console.error("Error fetching user profile:", error)
		return noUser
	}
}
const authSlicer = createSlice({
	name: "auth",
	initialState: initialState,
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
	devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	preloadedState: await handleAuthOnLoad(),
})

export const A_SetUser = (user: T_UserSchema_From_API | null) => authSlicer.actions.setUser(user)
export const A_SetAuth = (value: boolean) => authSlicer.actions.setIsConnected(value)
