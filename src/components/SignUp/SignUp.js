import React, { useState } from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton } from './SignUpElements';
// import { Link as LinkR } from 'react-router-dom'
import { useHistory } from "react-router-dom"

const Profile = ({setUser, setFootageLogs}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const history = useHistory()

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
            history.push("/tracker");
    }

    const { name, email, password} = formData;

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> </Icon>
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            <FormH1>Sign Up</FormH1>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput type='text' required placeholder="name" name="name" value={name} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required placeholder="email" name="email" value={email} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required placeholder="password" name="password" value={password} onChange={handleChange}/>
                            <FormButton type='submit'>Create Account</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Profile