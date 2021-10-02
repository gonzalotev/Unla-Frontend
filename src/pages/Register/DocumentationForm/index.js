import React from 'react';
import PropTypes from 'prop-types';
import { MessageError, UploadPicture, UploadPDF } from 'components';
import { commonWidthStyle, FormGroup, Row, Label } from 'styled/base';
import { WrapperInputs, StyledForm } from 'styled/form';
import { Button } from 'styled/buttons';
import { Formik } from 'formik';
import { studentProps } from 'utils';

import validationSchema from './validation-schema';

const DocumentationForm = ({ onSubmit, initialValues, onBack, onCancel }) => (
  <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
    {({ values, setFieldValue }) => (
      <StyledForm>
        <WrapperInputs>
          <Label>
            Para finalizar la inscripción, te solicitamos que adjuntes la siguiente documentación de
            forma scaneada en formato PDF.
          </Label>
        </WrapperInputs>
        <WrapperInputs>
          <FormGroup $bsStyle={commonWidthStyle}>
            <UploadPicture
              name="personalPhoto"
              onUpload={file => setFieldValue('personalPhoto', file)}
            />
            <MessageError name="personalPhoto" />
          </FormGroup>
        </WrapperInputs>
        <WrapperInputs>
          <FormGroup $bsStyle={commonWidthStyle}>
            <UploadPDF
              name="documentPhoto"
              onUpload={file => setFieldValue('documentPhoto', file)}
            />
            <MessageError name="documentPhoto" />
          </FormGroup>
        </WrapperInputs>
        <WrapperInputs>
          <FormGroup $bsStyle={commonWidthStyle}>
            <UploadPDF
              name="certificatePhoto"
              onUpload={file => setFieldValue('certificatePhoto', file)}
            />
            <MessageError name="certificatePhoto" />
          </FormGroup>
        </WrapperInputs>
        <WrapperInputs>
          <FormGroup $bsStyle={commonWidthStyle}>
            <UploadPDF
              name="approvedMattersPhoto"
              onUpload={file => setFieldValue('approvedMattersPhoto', file)}
            />
            <MessageError name="approvedMattersPhoto" />
          </FormGroup>
        </WrapperInputs>
        <Row right>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button onClick={() => onBack(values)}>Volver</Button>
          <Button type="submit">Finalizar</Button>
        </Row>
      </StyledForm>
    )}
  </Formik>
);

DocumentationForm.propTypes = {
  initialValues: studentProps.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DocumentationForm;