import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import {
  Container,
  Title,
  SubTitle,
  HighlightedText,
  Alert,
  Body,
  AccessLink,
  Wrapper,
} from './styled';

const Home = () => {
  const dispatch = useDispatch();
  const goToLogin = () => dispatch(push('/login'));

  return (
    <Container>
      <AccessLink onClick={goToLogin}>
        ACCEDER
      </AccessLink>
      <Title>ISDLA</Title>
      <SubTitle>Instituto Superior De La Alegria</SubTitle>
      <HighlightedText>¡Bienvenido!</HighlightedText>
      <HighlightedText>Solicitud de Inscripción</HighlightedText>
      <Alert>Importante</Alert> 
      <Body>
        Para acceder al sistema por primera vez tiene que disponer de un usuario y contraseña.
        Para ellos, debes escribir a la casilla de correo
        <strong>udla.lapaz.segundo@gmail.com</strong>
        indicando:
        <li> Nombre y Apellido completo</li>
        <li id="marginLeft">Tipo y Numero de documento</li>
        <li id="marginNegLeft"> Casilla de correo electronico</li>
      </Body>
    </Container>
  );
};

export default Home;
