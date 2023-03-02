import React, {useRef, useState} from "react"
import {createInput} from "../../../functions/createInput"
import $profile from "../../../shared/profile.module.scss"
import $form from "../../../shared/form.module.scss"
import {FieldSetWithLegend} from "../../../container/FieldSetWithLegend"
import {InputContainer} from "../../../container/InputContainer"
import {getRandomKey} from "../../../functions/getRandomKey()"

interface EditProfileProps {
	firstName: string
	lastName: string
}

export function EditProfile({firstName, lastName}: EditProfileProps) {
	const firstNameInput = useRef(
		createInput({
			label: "First Name",
			minLength: 4,
			inputType: "text",
		})
	).current
	const lastNameInput = useRef(
		createInput({
			label: "Last Name",
			minLength: 4,
			inputType: "text",
		})
	).current
	firstNameInput.setPlaceholder(firstName)
	lastNameInput.setPlaceholder(lastName)
	const formRef = useRef() as React.MutableRefObject<HTMLFormElement>
	// const submitUpdateRequest = (e: any) => {
	// 	e.preventDefault()
	// 	if (inputCollection.some(input => !input.isValid)) {
	// 		const invalidInputs = inputCollection.filter(input => !input.isValid)
	// 		invalidInputs.forEach(input => {
	// 			const that = document.getElementById(input.id) as HTMLInputElement
	// 			useVisualErrorFeedback(that, input)
	// 		})
	// 	} else {
	// 		formRef.current?.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}))
	// 	}
	// }
	// const {handleUpdateProfile} = useEditProfile(inputCollection)
	const [isEditable, setIsEditable] = useState(false)
	const toggleIsEditable = () => setIsEditable(prev => !prev)

	return (
		<>
			{!isEditable ? (
				<button
					className={$profile.button}
					onClick={toggleIsEditable}>
					Edit Name
				</button>
			) : (
				// <Modal
				// 	modalRef={modalRef}
				// 	onClose={closeModal}>
				<section className={$profile.formWrapper}>
					<form
						className={$form.formContainer}
						aria-label={"Edit Profile"}
						aria-describedby={""}
						ref={formRef}
						// onSubmit={submitUpdateRequest}
					>
						<FieldSetWithLegend legend={""}>
							<InputContainer
								key={getRandomKey()}
								input={firstNameInput}
							/>
							<InputContainer
								key={getRandomKey()}
								input={lastNameInput}
							/>
							<button
								className={$form.submitButton}
								onClick={e => {
									e.preventDefault()
									// handleUpdateProfile(e).then(r => r)
									toggleIsEditable()
								}}>
								Update
							</button>
						</FieldSetWithLegend>
					</form>
				</section>
				// </Modal>
			)}
		</>
	)
}
