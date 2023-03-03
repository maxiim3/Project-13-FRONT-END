import {useEditForm} from "../hooks/UseEditForm"
import $profile from "../shared/profile.module.scss"
import {FieldSetWithLegend} from "./FieldSetWithLegend"
import {Button} from "../components/Button"
import React from "react"
import {DefaultInput} from "../components/DefaultInput"

interface EditFormProps {
	firstName: string
	lastName: string
	toggleIsEditable: () => void
}

export function EditForm({firstName, lastName, toggleIsEditable}: EditFormProps) {
	const {
		formRef,
		firstNameInput,
		firstNamePrompt,
		lastNameInput,
		lastNamePrompt,
		handleUpdateProfile,
		setLastNamePrompt,
		setFirstNamePrompt,
		firstNameValidation,
		lastNameValidation,
	} = useEditForm(firstName, lastName)
	return (
		<section className={$profile.formWrapper}>
			<FieldSetWithLegend legend={`Update Your informations`}>
				<form
					className={$profile.formContainer}
					aria-label={"Edit Profile"}
					aria-describedby={""}
					ref={formRef}
					// onSubmit={submitUpdateRequest}
				>
					{/*TODO Refactor structure of Profile Page*/}
					<div className={$profile.inputWrapper}>
						<DefaultInput
							input={firstNameInput}
							value={firstNamePrompt}
							onChange={e => {
								firstNameValidation(e, firstNameInput)
							}}
						/>

						<DefaultInput
							input={lastNameInput}
							value={lastNamePrompt}
							onChange={e => lastNameValidation(e, lastNameInput)}
						/>
					</div>
					<div className={$profile.buttonWrapper}>
						<Button
							text={"Save"}
							ariaLabelProp={"Save"}
							ariaDescriptionProp={"Save modifications"}
							onClick={e => {
								e.preventDefault()
								handleUpdateProfile(e).then(() => {
									toggleIsEditable()
									setFirstNamePrompt("")
									setLastNamePrompt("")
								})
							}}
						/>
						<Button
							text={"Cancel"}
							ariaLabelProp={"Cancel button"}
							ariaDescriptionProp={"Cancel modifications"}
							onClick={e => {
								e.preventDefault()
								toggleIsEditable()
								setFirstNamePrompt("")
								setLastNamePrompt("")
							}}
						/>
					</div>
				</form>
			</FieldSetWithLegend>
		</section>
	)
}