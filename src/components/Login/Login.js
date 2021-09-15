import React from "react";
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, StyledTittle, colors, ButtonGroup} from '../styled/Styles'
import { Formik, Form } from "formik";
import { TextInput } from "./FormLib";
import {FiMail, FiLock} from 'react-icons/fi';
import * as Yup from 'yup';

const Login = () =>{

    return(
        <div>
            <StyledFormArea>
                <StyledTittle color={colors.dark2} size={30}>Login</StyledTittle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={(values, setSubmitting) =>{
                        console.log(values);
                    }}
                >
                    {() => (
                        <Form>
                             <TextInput 
                                name="email"
                                type="text"
                                label="Email"
                                placeholder="Correo Electronico"
                                icon={<FiMail/>}
                            />
                             <TextInput 
                                name="password"
                                type="password"
                                label="Contraseña"
                                placeholder="*********"
                                icon={<FiLock/>}
                            />
                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                    Login
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    )
}


export default Login;
