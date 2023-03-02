import React from "react"
import HomeSectionHero from "../components/HomeSectionHero"
import HomeSectionFeatures from "../components/HomeSectionFeatures"
import {MainContainer} from "../container/Main/MainContainer"

export default () => (
	<MainContainer
		ariaLabel={"Home Page"}
		ariaDescription={"Welcome to Argent Bank! Open a savings account today!"}>
		<HomeSectionHero />
		<HomeSectionFeatures />
	</MainContainer>
)
