import {T_ArrayOfInputs} from "../types/T_ArrayOfInputs"
import InputConstructor from "./InputConstructor"

//
// type setValues = {
// 	type: E_FormActions.SET_VALUES
// 	// payload: {label: string; isValid: boolean}
// 	payload: T_FormContext.inputConstructor
// }
// type checkValues = {
// 	type: E_FormActions.CHECK_ALL_VALUES
// 	payload?: undefined
// }

export declare namespace T_FormContext  {
	type inputElement = InputConstructor
	// type dispatchedActions = setValues | checkValues
	type inputCollection = T_ArrayOfInputs

}
// export 	enum E_FormActions {
// 		SET_VALUES = "setValues",
// 		CHECK_ALL_VALUES = "checkAllValues",
// 	}
