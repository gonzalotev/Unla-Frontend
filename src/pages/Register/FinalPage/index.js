import React from 'react';
import { TextAlert } from '../styled';
import {
  Container,
  Title,
  SubTitle,
  HighlightedText,
  Body,

} from './styled';

const FinalPage = () => (
  <Container>
    <Title>ISDLA</Title>
    <SubTitle>Instituto Superior De La Alegria</SubTitle>
    <HighlightedText>
      {' '}
      Gracias por elegir el Instituto de la Alegría.
      A la brevedad personal de Administración se contactará
      con vos para finalizar la matriculación.
      Tu numero de solicitud es xxxx
    </HighlightedText>
  </Container>
);

export default FinalPage;
