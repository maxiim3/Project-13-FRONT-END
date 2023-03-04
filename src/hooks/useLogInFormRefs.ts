import {useRef} from "react"
import {createInput} from "../functions/createInput"

export function useLogInFormRefs() {
	const email = useRef(createInput({label: "Username", inputType: "email"})).current
	const password = useRef(createInput({label: "Password", inputType: "password"})).current
	const checkbox = useRef(createInput({label: "Remember me", inputType: "checkbox"})).current
	const inputCollection = useRef([email, password, checkbox]).current
	const formDescription: string = useRef("Complete the form to sign in").current
	const formTitle: string = useRef("Sign in").current

	return {inputCollection, formDescription, formTitle}
}