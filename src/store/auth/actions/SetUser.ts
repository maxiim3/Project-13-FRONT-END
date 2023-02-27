import {T_UserSchema_From_API} from "../../../api/user/T_UserSchema"
import {authSlicer} from "../authSlicer"

export const SetUser = (user: T_UserSchema_From_API | null) => authSlicer.actions.setUser(user)