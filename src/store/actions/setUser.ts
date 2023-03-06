import {T_UserSchema_From_API} from "../../types/T_UserSchema"
import {authSlice} from "../authSlice"

/**
 * # SetUser
 * @description Action creator to set the user state
 * @param {T_UserSchema_From_API | null} user
 * @return {any}
 * @constructor
 */
export const SetUser = (user: T_UserSchema_From_API | null) => authSlice.actions.setUser(user)