import React from "react"
import $profile from "../shared/profile.module.scss"
import $sro from "../shared/sro.module.scss"
import {Navigate} from "react-router-dom"
import {PATH} from "../config.json"
import {MainContainer} from "../container/MainContainer"
import {AccountContainer} from "../container/AccountContainer"
import {Button} from "../components/Button"
import {useProfilePage} from "../hooks/UseProfilePage"
import {EditForm} from "../container/EditForm"
import {checkingAccount} from "../functions/transaction"

export const ProfilePage = () => {
	const {isConnected, lastName, firstName, isEditable, toggleIsEditable, navigate} =
		useProfilePage()

	// todo could be extracted as a middleware for both login and profile pages
	if (!isConnected) {
		navigate(PATH.LOGIN)
		return <Navigate to={PATH.LOGIN} />
	}

	// todo add accessibility to form

	return (
		<MainContainer
			ariaDescription={`Welcome to your profile page ${firstName}!`}
			ariaLabel={"User Profile Page"}>
			<aside className={$sro.screenReadersOnly}>
				Welcome to Your Profile Page. Here you can find your transactions and update
				informations
			</aside>
			<h2 className={$sro.screenReadersOnly}>Profile Page</h2>
			<div aria-label={"profile page wrapper"}>
				<section className={$profile.header}>
					<p className={$profile.heading}>Welcome back</p>

					{!isEditable ? (
						<p className={$profile.heading}>
							{firstName} {lastName}
						</p>
					) : (
						<EditForm
							firstName={firstName}
							lastName={lastName}
							toggleIsEditable={toggleIsEditable}
						/>
					)}
					{!isEditable && (
						<div className={$profile.buttonWrapper__EditBtn}>
							<Button
								text={"Edit"}
								ariaLabelProp={"Edit Button"}
								ariaDescriptionProp={"Update your informations"}
								onClick={e => {
									e.preventDefault()
									toggleIsEditable()
								}}
							/>
						</div>
					)}
				</section>
				{/*TODO --> Mobile View CSS*/}
				{/*TODO --> Transaction Model*/}
				{/*TODO --> Transaction Table (Use mocks, do not implement the update feature)*/}
				<h2 className={$sro.screenReadersOnly}>Accounts</h2>

				<AccountContainer data={checkingAccount} />
				<AccountContainer data={checkingAccount} />
				<AccountContainer data={checkingAccount} />
			</div>
		</MainContainer>
	)
}
