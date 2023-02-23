import {createContext, useCallback, useState} from "react"
import {T_FormContext} from "./types"

export const useForm = (initialState: T_FormContext.inputCollection) => {

	const [inputCollection] =
		useState<T_FormContext.inputCollection>(initialState)


	return {inputCollection}
}
export const FormContext = createContext<ReturnType<typeof useForm> | undefined>(
	undefined as ReturnType<typeof useForm> | undefined
)
