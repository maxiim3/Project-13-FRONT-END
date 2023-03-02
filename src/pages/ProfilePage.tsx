import React, {MouseEvent, useMemo, useRef, useState} from "react"
import $profile from "../shared/profile.module.scss"
import $sro from "../shared/sro.module.scss"
import {Navigate} from "react-router-dom"
import {PATH} from "../config.json"
import {MainContainer} from "../container/Main/MainContainer"
import {TransactionsSection} from "./profile-page/containers/TransactionsSection"
import {useProfileInformation} from "./profile-page/hooks/useProfileInformation"
import {createInput} from "../functions/createInput"
import {FieldSetWithLegend} from "../container/FieldSetWithLegend"
import {DefaultInput} from "../components/FormItems"

interface EditProfileProps {
	firstName: string
	lastName: string
}

type ButtonProps = {
	appliedStyle?: string
	text: string
	onClick?: (e: MouseEvent) => void
}

function Button({appliedStyle, onClick, text}: ButtonProps) {
	return (
		<button
			className={appliedStyle || $profile.button}
			onClick={onClick}>
			{text}
		</button>
	)
}

export const ProfilePage = () => {
	const {isConnected, user, navigate} = useProfileInformation()
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

	const {lastName, firstName} = useMemo(() => {
		return user
	}, [user])
	firstNameInput.setPlaceholder(firstName)
	lastNameInput.setPlaceholder(lastName)
	const formRef = useRef() as React.MutableRefObject<HTMLFormElement>
	const [isEditable, setIsEditable] = useState(false)
	const toggleIsEditable = () => setIsEditable(prev => !prev)

	const [firstNamePrompt, setFirstNamePrompt] = useState(firstName)
	const [lastNamePrompt, setLastNamePrompt] = useState(lastName)
	if (!isConnected) {
		navigate(PATH.LOGIN)
		return <Navigate to={PATH.LOGIN} />
	}

	// todo add accessibility
	return (
		<MainContainer
			ariaDescription={`Welcome to your profile page ${firstName}!`}
			ariaLabel={"User Profile Page"}>
			<h2 className={$sro.screenReadersOnly}>Profile Page</h2>
			<caption className={$sro.screenReadersOnly}>
				Welcome to Your Profile Page. Here you can find your transactions and update
				informations
			</caption>
			<div aria-label={"profile page wrapper"}>
				<section className={$profile.header}>
					<p className={$profile.heading}>Welcome back</p>

					{!isEditable ? (
						<p className={$profile.heading}>
							{firstName} {lastName}
						</p>
					) : (
						<section className={$profile.formWrapper}>
							<FieldSetWithLegend legend={`Update Your informations`}>
								<form
									className={$profile.formContainer}
									aria-label={"Edit Profile"}
									aria-describedby={""}
									ref={formRef}
									// onSubmit={submitUpdateRequest}
								>
									{/*TODO Match the wireframes for input*/}
									{/*TODO Make the input cancelable and optional*/}
									<div className={$profile.inputWrapper}>
										<DefaultInput
											input={firstNameInput}
											value={firstNamePrompt}
											onChange={e => setFirstNamePrompt(e.current.value)}
										/>

										<DefaultInput
											input={lastNameInput}
											value={lastNamePrompt}
											onChange={e => setLastNamePrompt(e.current.value)}
										/>
									</div>
									<div className={$profile.buttonWrapper}>
										<Button
											text={"Save"}
											onClick={e => {
												e.preventDefault()
												toggleIsEditable()
											}}
										/>
										<Button
											text={"Cancel"}
											onClick={e => {
												e.preventDefault()
												toggleIsEditable()
											}}
										/>
									</div>
									{/*<button*/}
									{/*	className={$form.submitButton}*/}
									{/*	onClick={e => {*/}
									{/*		e.preventDefault()*/}
									{/*		// handleUpdateProfile(e).then(r => r)*/}
									{/*		toggleIsEditable()*/}
									{/*	}}>*/}
									{/*	Update*/}
									{/*</button>*/}
								</form>
							</FieldSetWithLegend>
						</section>
					)}
					{!isEditable && (
						<Button
							text={"Edit Name"}
							onClick={e => {
								e.preventDefault()
								toggleIsEditable()
							}}
						/>
					)}
				</section>
				<TransactionsSection />
			</div>
		</MainContainer>
	)
}
