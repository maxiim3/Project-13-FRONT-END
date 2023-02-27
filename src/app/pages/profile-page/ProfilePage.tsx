import React, {useRef} from "react"
import $profile from "./profile.module.scss"
import {Navigate} from "react-router-dom"
import {PATH} from "../../../config.json"
import {MainContainer} from "../../containers/Main/MainContainer"
import {TransactionsContainer} from "./containers/TransactionsContainer"
import {Header} from "./components/Header"
import {useProfileInformation} from "./hooks/useProfileInformation"
import {EditProfile} from "./containers/EditProfile"

export const ProfilePage = () => {
	const {isConnected, user, navigate} = useProfileInformation()

	if (!isConnected) {
		navigate(PATH.LOGIN)
		return <Navigate to={PATH.LOGIN} />
	}

	const {lastName, firstName} = useRef(user).current

	// todo add accessibility
	return (
		<MainContainer
			ariaDescription={`Welcome to your profile page ${firstName}!`}
			ariaLabel={"User Profile Page"}>
			<>
				<section className={$profile.header}>
					<Header
						firstName={firstName}
						lastName={lastName}
					/>
					<EditProfile
						firstName={firstName}
						lastName={lastName}
					/>
				</section>
				<TransactionsContainer />
			</>
		</MainContainer>
	)
}
