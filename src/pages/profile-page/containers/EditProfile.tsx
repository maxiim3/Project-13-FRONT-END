import React, {useMemo} from "react"
import {Form} from "../../../components/form/Form"
import {inputFactory} from "../../../components/form/factory/InputFactory"
import $style from "../profile.module.scss"
import {useEditProfile} from "../hooks/useEditProfile"
import {Modal} from "../../../components/modal/Modal"
import {useModal} from "../../../components/modal/useModal"

interface EditProfileProps {
	firstName: string
	lastName: string
}

const firstNameInput = inputFactory({
	label: "First Name",
	minLength: 4,
	inputType: "text",
})
const lastNameInput = inputFactory({
	label: "Last Name",
	minLength: 4,
	inputType: "text",
})

export function EditProfile({firstName, lastName}: EditProfileProps) {
	const inputCollection = useMemo(() => {
		firstNameInput.setPlaceholder(firstName)
		lastNameInput.setPlaceholder(lastName)
		return [firstNameInput, lastNameInput]
	}, [firstName, lastName])

	const {handleUpdateProfile} = useEditProfile(inputCollection)
	const {modalRef, closeModal, openModal} = useModal()

	return (
		<>
			<button
				className={$style.button}
				onClick={openModal}>
				Edit Name
			</button>
			<Modal
				modalRef={modalRef}
				onClose={closeModal}>
				<Form
					description={""}
					title={"Edit Profile"}
					inputCollection={inputCollection}
					buttonLabel={"Update"}
					handleSubmit={e => {
						handleUpdateProfile(e).then(r => r)
						closeModal()
					}}
				/>
			</Modal>
		</>
	)
}
