import React from 'react'
import styled from 'styled-components'
import Jumbotron from'./Jumbotron'
// import Landscape from '../../images/landscape-road.jpg'



const Home = styled.div`
    text-align: center;
    background-position: center;
    background-size: cover;
`

function About() {

    return (
        <Home>
            <Jumbotron/>
        </Home> 
    )
}

export default About