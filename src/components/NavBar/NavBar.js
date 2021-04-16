import React, { useState} from 'react'
import styled from "styled-components"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo href="/">COVID-19 Data Tracker</Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span/>
            <span/>
            <span/>
        </Hamburger>
        <Menu isOpen={isOpen}>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink href="/sign-up">Sign Up</MenuLink>
            <MenuLink href="/log-in">Log In</MenuLink>
        </Menu>
        </Nav>
    )
}

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #0077B6;
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: white;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        transition: max-heightL 0.3s ease-in;
    }
`;

const MenuLink = styled.a`
    padding: 1rem 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none; 
    color: white;
    transition: all 0.3s ease-in;
    // font-size: 30px;

    &:hover {
        color: grey;
    }
`;

const Logo = styled.a`
    padding: 1rem 0;
    color: white;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
`;

export default Navbar