import {InputComponent} from "../../login-page/old/InputComponent"
import React, {createRef, useEffect} from "react"
import {Form} from "../../../components/form/Form"
import {inputFactory} from "../../../components/form/factory/InputFactory"

export function Modal(modal: {isVisible:boolean, handleCloseModal: any}) {
	const modalRef = createRef<HTMLDialogElement>()
	useEffect(() => {
		if(modal.isVisible) {
			modalRef.current?.showModal()
		}
		else {
			modalRef.current?.close()
		}

	},[modal.isVisible])
	const firstName = inputFactory({
		label: "First Name",
		minLength: 4,
		inputType: "text",
				 })
	const lastName = inputFactory({
		label: "Last Name",
		minLength: 4,
		inputType: "text",
				 })

	return (
		<dialog ref={modalRef}>
			{/*<form>*/}
			{/*	<InputComponent*/}
			{/*		minCharacter={4}*/}
			{/*		label={"First Name"}*/}
			{/*	/>*/}
			{/*	<InputComponent*/}
			{/*		minCharacter={4}*/}
			{/*		label={"Last Name"}*/}
			{/*	/>*/}
			{/*	<button*/}
			{/*	onClick={modal.handleCloseModal}>Save</button>*/}
			{/*</form>*/}
			<Form inputCollection={[firstName, lastName]} handleSubmit={() => console.log("hjkl")} />

		</dialog>
	)
}