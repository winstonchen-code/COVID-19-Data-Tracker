import React, { useState } from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormLabel, FormInput, FormButton, Text } from './LogInElements';
// import { Link as LinkR } from 'react-router-dom'
import { useHistory } from "react-router-dom"

const LogIn = ( {setUser, setFootageLogs} ) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    console.log(errors);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        history.push("/tracker");
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> </Icon>
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            {/* <FormH1>Log In to your account</FormH1> */}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required placeholder="email" name="email" value={formData.email} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required placeholder="password" name="password" value={formData.password} onChange={handleChange}/>
                            {errors.map(error => <p style={{color: "red" }} key={error}>{error}</p>)}
                            <FormButton type='submit'>Continue
                                {/* <LinkR to="/videos">Continue</LinkR> */}
                            </FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default LogIn