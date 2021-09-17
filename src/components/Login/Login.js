import React from "react";
import {StyledTextInput,
    StyledContainer,
     StyledFormArea, 
     StyledFormButton, 
     StyledLabel, 
     StyledTittle, 
     colors, 
     ButtonGroup, 
     CopyrightText} from '../styled/Styles'
import { Formik, Form } from "formik";
import { TextInput } from "./FormLib";
import {FiMail, FiLock} from 'react-icons/fi';
import Loader from "react-loader-spinner";

import validationSchema from "./ValidationSchema";

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
                    validationSchema={
                        validationSchema
                    }
                    onSubmit={(values, setSubmitting) =>{
                        console.log(values);
                    }}
                >
                    {({isSubmitting}) => (
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
                                {!isSubmitting &&<StyledFormButton type="submit">
                                    Login
                                </StyledFormButton>}
                                {isSubmitting && (
                                    <Loader 
                                        type="ThreeDots"
                                        color={colors.theme}
                                        height={50}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
            <CopyrightText>All rights reserved &copy;2021</CopyrightText>
        </div>
    )
}


export default Login;
