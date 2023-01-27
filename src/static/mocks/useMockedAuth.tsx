import {useRandomKey} from "../../app/hooks/useRandomKey"

const useMockedAuth = (status: boolean) => {
	return {isConnected: status, token: status ? useRandomKey() : ""}
}

export default useMockedAuth