import {createSlice} from "@reduxjs/toolkit"

export const authSlicer = createSlice({
										  name: "auth",
										  initialState: {
											  isConnected: true,
											  token: "",

										  },
										  reducers: {
											  setStatus: (state, action) => {
												  state.isConnected = !state.isConnected
											  },
											  setToken: (state, action) => state.token = action.payload,
										  },
									  },
)

