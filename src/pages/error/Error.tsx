import React from "react"
import $error from "./error.module.scss"
import {Link, Route} from "react-router-dom"
import {PATH} from "../../config.json"
import {getRandomKey} from "../../utils/getRandomKey()"



export default () => (
	<div className={$error.container}>
		<h1>404</h1>
		<p>Page not found</p>
		<Link to={PATH.HOME}>Go bach to Home Page</Link>
	</div>
)