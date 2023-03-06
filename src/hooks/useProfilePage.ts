import {useStoreState} from "./useStoreState"
import {useMemo, useState} from "react"

/**
 * # useProfilePage
 * @description Hook that handle the state of the Profile Page
 * @return {{navigate: NavigateFunction, lastName: any, firstName: any, isEditable: boolean, isConnected: any, toggleIsEditable: () => void}}
 */
export const useProfilePage = () => {
	// Get the state from the Store
	const {isConnected, user, navigate} = useStoreState()
	// Object Destructuring : Getting firstname and lastname from user (Store)
	const {lastName, firstName} = useMemo(() => {
		return user
	}, [user])

	// State of edit button : Able to edit or not the names
	const [isEditable, setIsEditable] = useState(false)

	// Action to toggle the edit button State
	const toggleIsEditable = () => setIsEditable(prev => !prev)

	return {isConnected, navigate, lastName, firstName, isEditable, toggleIsEditable}
}