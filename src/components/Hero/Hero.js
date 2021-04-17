import React from 'react'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
    return (
        <>
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>COVID-19 Data Tracker</HeroH1>
                    <HeroP>Get the latest Coronavirus information here.</HeroP>
                    <form method="get" action="/sign-up">
                        <HeroBtn type="submit">Sign Up</HeroBtn>
                    </form>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default Hero
