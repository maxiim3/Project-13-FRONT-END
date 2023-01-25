import React from "react"
import $error from "./error.module.scss"
import {Link} from "react-router-dom"
import {PATHS} from "../../routes/config/PATHS"


export default () => (
	<div className={$error.container}>
		<h1>404</h1>
		<p>Page not found</p>
		<Link to={PATHS.HOME}>Go bach to Home Page</Link>
	</div>
)