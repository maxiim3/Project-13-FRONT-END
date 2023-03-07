import {useEditForm} from "../hooks/useEditForm"
import $profile from "../sass/profile.module.scss"
import {FieldSetWithLegendContainer} from "../container/FieldSetWithLegendContainer"
import {DefaultInput} from "../components/DefaultInput"
import {Button} from "../components/Button"
import React from "react"

/**
 * # ProfilePageForm
 * @description Profile Page Form
 * @param {string} firstName
 * @param {string} lastName
 * @param {() => void} toggleIsEditable
 * @requires FieldSetWithLegendContainer
 * @requires DefaultInput
 * @requires Button
 * @return {JSX.Element}
 */
export function ProfilePageForm({firstName, lastName, toggleIsEditable}: EditFormProps) {
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
			<FieldSetWithLegendContainer legend={`Update Your informations`}>
				<form
					className={$profile.formContainer}
					aria-label={"Edit Profile"}
					aria-describedby={""}
					ref={formRef}
					// onSubmit={submitUpdateRequest}
				>
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
			</FieldSetWithLegendContainer>
		</section>
	)
}

type EditFormProps = {
	firstName: string
	lastName: string
	toggleIsEditable: () => void
}
