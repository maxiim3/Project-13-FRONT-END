import {useEffect, useMemo, useState} from "react"
import {useJWTDecoder} from "./useJWTDecoder"
import {useLoginDispatcher} from "./useLoginDispatcher"
import getUserProfile from "../api/getUserProfile"

/**
 * # UseAuthChecker
 * @description Hook to check if user is authenticated. If so, it will set the user in the store.
 * @return {{isLoading: boolean}}
 */
export const useAuthChecker = () => {
	// Handle the state of the auth check component
	const [isLoading, setIsLoading] = useState(true)
	// set the user in the hook state
	const [user, setUser] = useState(null)
	// check if there is a token in local storage, then decode it
	const {token} = useMemo(() => {
		const token = localStorage.getItem("token")
		return token ? useJWTDecoder(token) : {token: null}
	}, [])
	// log user in action creator
	const {logUserIn} = useLoginDispatcher()

	// check if user is authenticated
	const checkAuth = async () => {
		if (!token) {
			setIsLoading(false)
			return
		}
		try {
			// get user profile
			const responseFromAPI = await getUserProfile()
			// set user in the hook state
			setUser(responseFromAPI.data.body)
		} finally {
			setIsLoading(false)
		}
	}

	useMemo(() => {
		// check if user is authenticated
		checkAuth().then()
	}, [])
	useEffect(() => {
		// if user is authenticated, log user in using the action creator and dispatcher
		user && logUserIn(user)
	}, [user])

	return {isLoading}
}
