import {createSlice} from "@reduxjs/toolkit"
import useMockedAuth from "../../static/mocks/useMockedAuth"

export const authSlicer = createSlice({
	name: "auth",
	initialState: useMockedAuth(false),
	reducers: {
		logOutUser: state => {
			state.isConnected = true
		},
		logInUser: state => {
			state.isConnected = false
		},
		setToken: (state, action) => (state.token = action.payload),
	},
})
