import React, {useEffect} from "react"
import {PATH} from "../config.json"
import {Navigate, useNavigate} from "react-router-dom"
import $login from "../shared/login.module.scss"
import LoginPageForm from "./LoginPageForm"
import {MainContainer} from "../container/MainContainer"
import {useSelector} from "react-redux"

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
		if (!isConnected) {
			navigate(PATH.LOGIN)
		}
	}, [])

	return (
		<MainContainer
			ariaDescription={"Login to your account"}
			ariaLabel={"Sign In Page"}>
			<section className={$login.container}>
				<i className={`fa fa-user-circle ${$login.icon}`}></i>
				<h1>Sign In</h1>
				<LoginPageForm />
			</section>
		</MainContainer>
	)
}
