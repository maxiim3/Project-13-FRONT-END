import React, {useEffect} from "react"
import {PATH} from "../config.json"
import {Navigate, useNavigate} from "react-router-dom"
import $login from "../sass/login.module.scss"
import LoginPageForm from "./LoginPageForm"
import {MainContainer} from "../container/MainContainer"
import {useSelector} from "react-redux"
import {FaUserCircle, HiUserCircle} from "react-icons/all"

/**
 * # LogInPage
 * @description Log In Page
 * @requires MainContainer
 * @requires LoginPageForm
 * @return {JSX.Element}
 * @constructor
 */
export const LogInPage = () => {
	const navigate = useNavigate()
	const {isConnected} = useSelector((state: any) => state.auth)

	useEffect(() => {
		if (isConnected) {
			navigate(PATH.PROFILE)
		}
	}, [])

	return (
		<MainContainer
			ariaDescription={"Login to your account"}
			ariaLabel={"Sign In Page"}>
			<section className={$login.container}>
				<FaUserCircle className={$login.icon}/>
				<h1>Sign In</h1>
				<LoginPageForm />
			</section>
		</MainContainer>
	)
}
