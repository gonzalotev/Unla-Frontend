import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MessageError, Dropdown, Check, Modal,
} from 'components';
import { Link } from 'react-router-dom';
import { commonWidthStyle, FormGroup, Row } from 'styled/base';
import { WrapperInputs, StyledForm } from 'styled/form';
import { Button } from 'styled/buttons';
import {
  carrers, inscriptions, faculties, rotations,
} from 'constant';
import { Formik } from 'formik';
import { studentProps } from 'utils';
import TermsAndConditions from 'pages/Register/TermsAndConditions';

import validationSchema from './validation-schema';

const LocationForm = ({
  onSubmit, initialValues, onBack, onCancel,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange }) => (
        <StyledForm>
          <WrapperInputs>
            <FormGroup $bsStyle={commonWidthStyle}>
              <Dropdown
                name="inscription"
                placeholder="Período de Inscripción *"
                onChange={handleChange}
                value={values.inscription}
                options={inscriptions}
              />
              <MessageError name="inscription" />
            </FormGroup>
            <FormGroup $bsStyle={commonWidthStyle}>
              <Dropdown
                name="carrer"
                placeholder="Carrera *"
                onChange={handleChange}
                value={values.carrer}
                options={carrers}
              />
              <MessageError name="carrer" />
            </FormGroup>
            <FormGroup $bsStyle={commonWidthStyle}>
              <Dropdown
                name="rotation"
                placeholder="Turno *"
                onChange={handleChange}
                value={values.rotation}
                options={rotations}
              />
              <MessageError name="rotation" />
            </FormGroup>
          </WrapperInputs>
          <WrapperInputs>
            <FormGroup>
              <Check
                label={(
                  <>
                    Para confirmar la solicitud de Admisión, por favor leer los&nbsp;
                    <Link href="/" onClick={() => setShowModal(!showModal)}>
                      Términos y Condiciones
                    </Link>
                  </>
                )}
                name="terms"
              />
              <MessageError name="terms" />
            </FormGroup>
          </WrapperInputs>
          <Row right>
            <Button onClick={() => onCancel()}>Cancelar</Button>
            <Button onClick={() => onBack(values)}>Volver</Button>
            <Button type="submit">Siguiente</Button>
          </Row>
          <Modal isActive={showModal} fullPage handleClose={() => setShowModal(false)}>
            <TermsAndConditions />
          </Modal>
        </StyledForm>
      )}
    </Formik>
  );
};

LocationForm.propTypes = {
  initialValues: studentProps.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default LocationForm;
