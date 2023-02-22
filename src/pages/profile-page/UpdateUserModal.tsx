import {InputComponent} from "../../components/InputComponent"
import React, {createRef, useEffect} from "react"

export function UpdateUserModal(modal: {isVisible:boolean, handleCloseModal: any}) {
	const modalRef = createRef<HTMLDialogElement>()
	useEffect(() => {
		if(modal.isVisible) {
			modalRef.current?.showModal()
		}
		else {
			modalRef.current?.close()
		}

	},[modal.isVisible])

	return (
		<dialog ref={modalRef}>
			<form>
				<InputComponent
					minCharacter={4}
					label={"First Name"}
				/>
				<InputComponent
					minCharacter={4}
					label={"Last Name"}
				/>
				<button
				onClick={modal.handleCloseModal}>Save</button>
			</form>
		</dialog>
	)
}