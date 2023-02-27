import {createContext} from "react"
import {formContextReducer} from "./formContextReducer"

export const FormContext = createContext<ReturnType<typeof formContextReducer> | undefined>(
	undefined as ReturnType<typeof formContextReducer> | undefined
)
