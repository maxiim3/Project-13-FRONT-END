import {T_FormContext} from "../../../types/T_FormContext"
import React, {useCallback, useState} from "react"

export const formContextReducer = (initialState: T_FormContext.inputCollection, handle: any) => {
	const [inputCollection] = useState<T_FormContext.inputCollection>(initialState)
	const handleButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		inputCollection.every(input => input.isValid)
		? handle(e, inputCollection)
		: console.log("not valid")
	}, [])

	return {inputCollection, handleButton}
}