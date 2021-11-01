import React from 'react';
import PropTypes from 'prop-types';
import { MessageError, Dropdown } from 'components';
import { Input } from 'styled/input';
import { commonWidthStyle, FormGroup, Row } from 'styled/base';
import { WrapperInputs, StyledForm } from 'styled/form';
import { Button } from 'styled/buttons';
import { states } from 'constant';
import { Formik } from 'formik';
import { studentProps } from 'utils';

import validationSchema from './validation-schema';

const LocationForm = ({
  onSubmit, onBack, onCancel, initialValues,
}) => (
  <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
    {({ values, handleChange }) => (
      <StyledForm>
        <WrapperInputs>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Dropdown
              name="state"
              placeholder="Provincia *"
              onChange={handleChange}
              value={values.state}
              options={states}
            />
            <MessageError name="state" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="department" placeholder="Localidad *" />
            <MessageError name="department" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="street" placeholder="Calle *" />
            <MessageError name="street" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="doorNumber" placeholder="Altura *" />
            <MessageError name="doorNumber" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="floor" placeholder="Piso" />
            <MessageError name="floor" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="block" placeholder="Departamento" />
            <MessageError name="block" />
          </FormGroup>
          <FormGroup $bsStyle={commonWidthStyle}>
            <Input name="zipCode" placeholder="Código Postal *" />
            <MessageError name="zipCode" />
          </FormGroup>
        </WrapperInputs>
        <Row right>
          <Button onClick={() => onCancel()}>Cancelar</Button>
          <Button onClick={() => onBack(values)}>Volver</Button>
          <Button type="submit">Siguiente</Button>
        </Row>
      </StyledForm>
    )}
  </Formik>
);

LocationForm.propTypes = {
  initialValues: studentProps.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default LocationForm;
