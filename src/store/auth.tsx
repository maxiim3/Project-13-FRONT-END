import {createSlice} from "@reduxjs/toolkit"

export const authSlicer = createSlice({
										  name: "auth",
										  initialState: {
											  isConnected: true,
											  token: "",

										  },
										  reducers: {
											  logOutUser: (state) => {
												  state.isConnected = true
											  },
											  logInUser: (state) => {
												  state.isConnected = false
											  },
											  setToken: (state, action) => state.token = action.payload,
										  },
									  },
)

