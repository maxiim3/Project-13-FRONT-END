import {useRef} from "react"
import {createInput} from "../functions/createInput"

/**
 * # useLogInFormRefs
 * @description Hook that handle the form and input states. Handle the submit event and the response from the service.
 * @return {{formDescription: string, formTitle: string, inputCollection: T_InputFactory.InputModel[]}}
 */
export function useLogInFormRefs() {
	const email = useRef(createInput({label: "Username", inputType: "email"})).current
	const password = useRef(createInput({label: "Password", inputType: "password"})).current
	const checkbox = useRef(createInput({label: "Remember me", inputType: "checkbox"})).current
	const inputCollection = useRef([email, password, checkbox]).current
	const formDescription: string = useRef("Complete the form to sign in").current
	const formTitle: string = useRef("Sign in").current

	return {inputCollection, formDescription, formTitle}
}