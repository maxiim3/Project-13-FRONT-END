import {Provider} from "react-redux"
import {Store} from "../store/store"
import React, {ReactNode} from "react"
import PropTypes from "prop-types"

/**
 * # StoreContainer
 * @description Provides the store to the app
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
export function StoreContainer({children}: {children: ReactNode}) {
	return <Provider store={Store}>{children}</Provider>
}

StoreContainer.propTypes = {
	children: PropTypes.node.isRequired,
}
