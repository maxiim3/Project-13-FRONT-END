import {createSlice} from "@reduxjs/toolkit"
import {initialAuthState} from "./initialAuthState"

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