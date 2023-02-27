import {inputFactory} from "../../../components/form/factory/InputFactory"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import {useLoginDispatcher} from "../../../../store/hooks/useLoginDispatcher"
import logInUser from "../../../../api/logInUser"
import getUserProfile from "../../../../api/getUserProfile"
import {PATH} from "../../../../config.json"

export const useSignIn = ([email, password, checkbox]: Array<ReturnType<typeof inputFactory>>) => {
	const navigate = useNavigate()
	const {auth} = useSelector((state: any) => state)
	const {logUserIn} = useLoginDispatcher()
	const handleRequestLogin = async (e: any) => {
		e.preventDefault()
		const payload = {
			email: email.inputValue,
			password: password.inputValue,
		}
		const rememberMe = checkbox.inputValue === "true"

		try {
			const loginResponse = await logInUser(payload)
			console.log(loginResponse)
			const status = "success"
			const message = "Login successful"
			const token = loginResponse.data.body.token
			email.setResponse({status, message})
			password.setResponse({status, message})

			const userProfileResponse = await getUserProfile(token)
			console.log(userProfileResponse)
			const user = userProfileResponse.data.body

			logUserIn(user)
			if (rememberMe) {
				localStorage.setItem("token", token)
			}
			navigate(PATH.HOME)
		} catch (e: any) {
			const status = "error"
			const message = e.response.data.message
			console.warn(e.response.data.message)
			email.setResponse({status, message})
			password.setResponse({status, message})
		} finally {
			console.log("finally", email.response, password.response)
		}
	}

	return {isConnected: auth.isConnected, navigate, handleRequestLogin}
}
