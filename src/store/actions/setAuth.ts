import {authSlice} from "../authSlice"

export const SetAuth = (value: boolean) => authSlice.actions.setIsConnected(value)