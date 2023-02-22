import {T_UserSchema_From_API} from "./T_UserSchema"
import {AxiosHeaders} from "axios"

export type T_Config = any
export type T_Message = string
export type T_Status = number
export type T_StatusText = string
export type T_Headers = typeof AxiosHeaders
export type T_Request = XMLHttpRequest
export type T_Data = {
	body?: Array<T_UserSchema_From_API>
	message?: T_Message
	status?: T_Status
}

export type T_Response = {
	config?: T_Config
	data?: T_Data
	headers?: T_Headers
	request?: T_Request
	status?: T_Status
	statusText?: T_StatusText
}
