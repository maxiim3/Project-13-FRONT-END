import React, {createContext, useCallback, useState} from "react"
import {T_FormContext} from "../../../types/T_FormContext"

export const useForm = (initialState: T_FormContext.inputCollection, handle: any) => {
	const [inputCollection] = useState<T_FormContext.inputCollection>(initialState)
	const handleButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		inputCollection.every(input => input.isValid)
			? handle(e, inputCollection)
			: console.log("not valid")
	}, [])

	return {inputCollection, handleButton}
}
export const FormContext = createContext<ReturnType<typeof useForm> | undefined>(
	undefined as ReturnType<typeof useForm> | undefined
)
