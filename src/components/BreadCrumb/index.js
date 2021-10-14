import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Wrapper, Identifier, Description, Item, Divisor,
} from './styled';

const steps = [
  { id: 1, description: 'Datos Personales' },
  { id: 2, description: 'Datos Domicilio' },
  { id: 3, description: 'Selección de Carrera' },
  { id: 4, description: 'Documentación' },
];

const BreadCrumb = ({ selectedStep }) => (
  <Container>
    <Wrapper>
      {steps.map((step) => (
        <>
          <Item>
            <Identifier active={selectedStep === step.id}>{step.id}</Identifier>
            <Description>{step.description}</Description>
          </Item>
          {step.id !== steps.length && <Divisor />}
        </>
      ))}
    </Wrapper>
  </Container>
);

BreadCrumb.propTypes = {
  selectedStep: PropTypes.number.isRequired,
};

export default BreadCrumb;
