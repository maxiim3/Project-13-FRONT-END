import {authSlice} from "../authSlice"

/**
 * # SetAuth
 * @description Action creator to set the auth state
 * @param {boolean} value
 * @return {any}
 * @constructor
 */
export const SetAuth = (value: boolean) => authSlice.actions.setIsConnected(value)