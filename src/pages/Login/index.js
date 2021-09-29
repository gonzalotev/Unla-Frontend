import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  FiMail, FiLock, FiEyeOff, FiEye,
} from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import TextInput from 'components/TextInput';
import { colors } from 'constant';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginRequest } from 'store/Auth/actions';
import { getError, getIsLoading } from 'store/Auth/selectors';
import { push } from 'connected-react-router';

import validationSchema from './ValidationSchema';
import {
  Container,
  StyledFormArea,
  StyledFormButton,
  StyledTittle,
  ButtonGroup,
  CopyrightText,
} from './styled';

const Login = () => {
  const dispatch = useDispatch();
  const [eye, setEye] = useState(false);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const goToHome = () => dispatch(push('/Home'));

  return (
    <Container>
      <StyledFormArea>
        <StyledTittle color={colors.dark1} size={35}>Login</StyledTittle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => dispatch(authLoginRequest(values.email, values.password))}
        >
          <Form>
            <TextInput
              name="email"
              type="text"
              label="Email"
              placeholder="Correo Electronico"
              iconLeft={<FiMail />}
            />
            <TextInput
              name="password"
              type={eye ? 'text' : 'password'}
              label="Contraseña"
              placeholder="*********"
              iconLeft={<FiLock />}
              iconRight={eye ? <FiEye /> : <FiEyeOff />}
              onClickIconRight={() => setEye(!eye)}
              maxLength={8}
            />
            <ButtonGroup>
              {isLoading ? (
                <Loader
                  type="ThreeDots"
                  color={colors.theme}
                  height={50}
                  width={100}
                />
              ) : (
                <StyledFormButton type="submit">
                  Login
                </StyledFormButton>
              )}
            </ButtonGroup>
            <ButtonGroup>
              <StyledFormButton onClick={goToHome}>
                Cancelar
              </StyledFormButton>
            </ButtonGroup>
          </Form>
        </Formik>
        {error}
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2021</CopyrightText>
    </Container>
  );
};

export default Login;
