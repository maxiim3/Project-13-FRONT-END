import {T_UserSchema_From_API} from "../../../api/schema/T_UserSchema"
import {authSlicer} from "../authSlicer"

export const SetUser = (user: T_UserSchema_From_API | null) => authSlicer.actions.setUser(user)