import {createSlice} from "@reduxjs/toolkit"
import {initialAuthState} from "./initialAuthState"

/**
 * # Auth Slice
 * @description This slice is used to store the auth state
 * @type {Slice<{isConnected: boolean, user: null}, {setUser: (state, action) => void, setIsConnected: (state, action) => void}, string>}
 */
export const authSlice = createSlice({
										  name: "auth",
										  initialState: initialAuthState,
										  reducers: {
											  setUser: (state, action) => {
												  state.user = action.payload
											  },
											  setIsConnected: (state, action) => {
												  state.isConnected = action.payload
											  },
										  },
									  })


