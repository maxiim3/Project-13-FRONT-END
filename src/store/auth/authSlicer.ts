import {createSlice} from "@reduxjs/toolkit"
import {initialState} from "./state/initialState"

export const authSlicer = createSlice({
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