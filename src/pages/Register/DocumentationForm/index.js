import React from 'react';
import PropTypes from 'prop-types';
import { MessageError, UploadPicture, UploadPDF } from 'components';
import {
  commonWidthStyle, FormGroup, Row, Label,
} from 'styled/base';
import { WrapperInputs, StyledForm } from 'styled/form';
import { Button } from 'styled/buttons';
import { Formik } from 'formik';
import { studentProps } from 'utils';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useHistory } from 'react-router-dom';

import validationSchema from './validation-schema';
import { TextAlert } from '../styled';

const DocumentationForm = ({
  onSubmit, initialValues, onBack, onCancel,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const goToFinalPage = () => dispatch(push('/FinalPage'));
  const handleSubmit = () => {
    history.push('/FinalPage');
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <StyledForm>
          <WrapperInputs>
            <Label>
              Para finalizar la inscripción, te solicitamos que adjuntes la siguiente
              documentación de forma scaneada en formato PDF.
            </Label>
          </WrapperInputs>
          <WrapperInputs>
            <FormGroup $bsStyle={commonWidthStyle}>
              <UploadPicture
                name="personalPhoto"
                onUpload={(file) => setFieldValue('personalPhoto', file)}
              />
              <MessageError name="personalPhoto" />
              <TextAlert>Será utilizada para tu perfil</TextAlert>
            </FormGroup>
          </WrapperInputs>
          <WrapperInputs>
            <FormGroup $bsStyle={commonWidthStyle}>
              <UploadPDF
                name="documentPhoto"
                onUpload={(file) => setFieldValue('documentPhoto', file)}
              />
              <MessageError name="documentPhoto" />
              <TextAlert>DNI frente y reverso de la tajeta, pasaporte o precaria</TextAlert>
            </FormGroup>
          </WrapperInputs>
          <WrapperInputs>
            <FormGroup $bsStyle={commonWidthStyle}>
              <UploadPDF
                name="certificatePhoto"
                onUpload={(file) => setFieldValue('certificatePhoto', file)}
              />
              <MessageError name="certificatePhoto" />
              <TextAlert>
                Secundario completo, certificado del titulo
                en trámite o constancia de alumno regular emitido por
                el establecimiento en el que egresaste o en el que cursas actualmente.
              </TextAlert>
            </FormGroup>
          </WrapperInputs>
          <WrapperInputs>
            <FormGroup $bsStyle={commonWidthStyle}>
              <UploadPDF
                name="approvedMattersPhoto"
                onUpload={(file) => setFieldValue('approvedMattersPhoto', file)}
              />
              <MessageError name="approvedMattersPhoto" />
              <TextAlert>Constancia de materias aprobadas en otra institución</TextAlert>
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
};

DocumentationForm.propTypes = {
  initialValues: studentProps.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DocumentationForm;
