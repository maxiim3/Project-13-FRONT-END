import React from "react"
import Hero from "./HomeSectionHero"
import Features from "./HomeSectionFeatures"
import {MainContainer} from "../components/Main/MainContainer"

export default () => (
	<MainContainer
		ariaLabel={"Home Page"}
		ariaDescription={"Welcome to Argent Bank! Open a savings account today!"}>
		<Hero />
		<Features />
	</MainContainer>
)
