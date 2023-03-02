import {T_UserSchema_From_API} from "../../types/T_UserSchema"
import {authSlice} from "../authSlice"

export const SetUser = (user: T_UserSchema_From_API | null) => authSlice.actions.setUser(user)