import {createSlice} from "@reduxjs/toolkit"
import useMockedUser from "../../static/mocks/useMockedUser"

export const userSlicer = createSlice({
										  name: "connectedUser",
										  initialState: useMockedUser(0),
										  reducers: {
											  updateUserFirstName: (state, action) => state.firstName = action.payload,
											  updateUserLastName: (state, action) => state.lastName = action.payload,
										  },
									  })

