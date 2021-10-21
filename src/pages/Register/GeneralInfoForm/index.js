import React from 'react';
import PropTypes from 'prop-types';
import { MessageError, Dropdown, DatePickerLocale } from 'components';
import { Input } from 'styled/input';
import { commonWidthStyle, FormGroup, Row } from 'styled/base';
import { WrapperInputs, StyledForm } from 'styled/form';
import { Button } from 'styled/buttons';
import { documentTypes, civilStates, genders } from 'constant';
import { Formik } from 'formik';
import { studentProps } from 'utils';

import validationSchema from './validation-schema';

const RegisterForm = ({ initialValues = { document: '' }, onSubmit, onCancel }) => (
  <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
    {({ values = {}, handleChange, setFieldValue }) => (
      <StyledForm>
        <WrapperInputs>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Dropdown
              name="documentType"
              placeholder="Tipo de Documento *"
              onChange={handleChange}
              value={values.documentType || 1}
              options={documentTypes}
            />
            <MessageError name="documentType" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input type="number" name="document" placeholder="Nro. de Documento *" />
            <MessageError name="document" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="name" placeholder="Nombre Completo *" />
            <MessageError name="name" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input type="surname" name="surname" placeholder="Apellido Completo *" />
            <MessageError name="surname" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Dropdown
              name="gender"
              placeholder="Sexo *"
              onChange={handleChange}
              value={values.gender || 1}
              options={genders}
            />
            <MessageError name="gender" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <DatePickerLocale
              value={values.birthDate}
              onChange={(date) => setFieldValue('birthDate', date)}
              placeholder="Fecha de Nacimiento *"
            />
            <MessageError name="birthDate" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="nationality" placeholder="Nacionalidad *" />
            <MessageError name="nationality" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Dropdown
              name="civilState"
              placeholder="Estado Civil"
              onChange={handleChange}
              value={values.civilState}
              options={civilStates}
            />
            <MessageError name="civilState" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="email" placeholder="Email *" />
            <MessageError name="email" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="telephone" placeholder="Teléfono Particular" />
            <MessageError name="telephone" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="cellphone" placeholder="Teléfono Móvil *" />
            <MessageError name="cellphone" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="educationStateFather" placeholder="Educación del Padre" />
            <MessageError name="educationStateFather" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="educationStateMother" placeholder="Educación de la Madre" />
            <MessageError name="educationStateMother" />
          </FormGroup>
        </WrapperInputs>
        <Row right>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button type="submit">Siguiente</Button>
        </Row>
      </StyledForm>
    )}
  </Formik>
);

RegisterForm.propTypes = {
  initialValues: studentProps.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default RegisterForm;
