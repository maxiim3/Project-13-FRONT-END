import {T_InputFactory} from "../../../components/form/types/T_InputFactory"
import {useUpdateUserDispatcher} from "../../../hooks/useUpdateUser"
import userService from "../../../service/userService"
import {RefObject, useCallback, useRef} from "react"

export const useEditProfile = ([firstNameInput, lastNameInput]: T_InputFactory.InputModel[]) => {
	const {updateUser} = useUpdateUserDispatcher()

	const handleUpdateProfile = async (e: any) => {
		e.preventDefault()
		const payload = {
			firstName: firstNameInput.inputValue,
			lastName: lastNameInput.inputValue,
		}
		try {
			const updateResponse = await userService.updateUser(payload)
			console.log(updateResponse)
			const status = "success"
			const message = "Update successful"

			firstNameInput.setResponse({status, message})
			lastNameInput.setResponse({status, message})

			const user = updateResponse.data.body

			updateUser(user)
			console.log(user)
			return user
		} catch (e: any) {
			const status = "error"
			const message = e.response.data.message
			console.warn(e.response.data.message)
			firstNameInput.setResponse({status, message})
			lastNameInput.setResponse({status, message})
		} finally {
			console.log("finally", firstNameInput.response, lastNameInput.response)
		}
	}

	return {handleUpdateProfile}
}
