import {useEffect, useMemo, useState} from "react"
import {useJWTDecoder} from "./useJWTDecoder"
import {useLoginDispatcher} from "./useLoginDispatcher"
import getUserProfile from "../../api/getUserProfile"

/**
 * # UseAuthChecker
 * @description Hook to check if profile-page is authenticated. If so, it will set the profile-page in the store.
 * @return {{isLoading: boolean}}
 */
export const useAuthChecker = () => {
	// Handle the state of the login-page check components
	const [isLoading, setIsLoading] = useState(true)
	// set the profile-page in the hook state
	const [user, setUser] = useState(null)
	// check if there is a token in local storage, then decode it
	const {token} = useMemo(() => {
		const token = localStorage.getItem("token")
		return token ? useJWTDecoder(token) : {token: null}
	}, [])
	// log profile-page in action creator
	const {logUserIn} = useLoginDispatcher()

	// check if profile-page is authenticated
	const checkAuth = async () => {
		if (!token) {
			setIsLoading(false)
			return
		}
		try {
			// get profile-page profile
			const responseFromAPI = await getUserProfile()
			// set profile-page in the hook state
			setUser(responseFromAPI.data.body)
		} finally {
			setIsLoading(false)
		}
	}

	useMemo(() => {
		// check if profile-page is authenticated
		checkAuth().then()
	}, [])
	useEffect(() => {
		// if profile-page is authenticated, log profile-page in using the action creator and dispatcher
		user && logUserIn(user)
	}, [user])

	return {isLoading}
}
