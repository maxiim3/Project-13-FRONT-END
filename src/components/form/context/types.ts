import {T_ArrayOfInputs} from "../types/T_ArrayOfInputs"
import InputConstructor from "./InputConstructor"


export declare namespace ContextTypes  {
	type T_Input_Model = InputConstructor
	type T_DispatchFormActions = T_ACTION_SET_VALUES | T_ACTION_CHECK_ALL_VALUES
	type T_FormStateObject = {
		inputValues: T_ArrayOfInputs
		allValid: boolean
	}
	type T_ACTION_SET_VALUES = {
		type: E_FormActions.SET_VALUES
		payload: {label: string; isValid: boolean}
	}
	type T_ACTION_CHECK_ALL_VALUES = {
		type: E_FormActions.CHECK_ALL_VALUES
		payload?: undefined
	}

}
export 	enum E_FormActions {
		SET_VALUES = "setValues",
		CHECK_ALL_VALUES = "checkAllValues",
	}
