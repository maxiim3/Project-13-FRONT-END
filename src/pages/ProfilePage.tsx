import React, {useEffect} from "react"
import $profile from "../shared/profile.module.scss"
import $sro from "../shared/sro.module.scss"
import {PATH} from "../config.json"
import {MainContainer} from "../container/MainContainer"
import {Button} from "../components/Button"
import {useProfilePage} from "../hooks/useProfilePage"
import {fakeTransactionsStore} from "../mocks/fakeTransactionsStore"
import {ProfilePageAccountOverview} from "./ProfilePageAccountOverview"
import {ProfilePageForm} from "./ProfilePageForm"

/**
 * # ProfilePage
 * @description Profile Page
 * @requires MainContainer
 * @requires Button
 * @requires ProfilePageForm
 * @requires ProfilePageAccountOverview
 * @return {JSX.Element}
 */
export const ProfilePage = () => {
	const {isConnected, lastName, firstName, isEditable, toggleIsEditable, navigate} =
		useProfilePage()

	const {checkingAccount, creditAccount, savingAccount} = fakeTransactionsStore()

	useEffect(() => {
		if (!isConnected) {
			navigate(PATH.LOGIN)
		}
	}, [])

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
						<ProfilePageForm
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

				<ProfilePageAccountOverview transactions={checkingAccount} />
				<ProfilePageAccountOverview transactions={creditAccount} />
				<ProfilePageAccountOverview transactions={savingAccount} />
			</div>
		</MainContainer>
	)
}
