import React, { useState } from 'react';
import { initialStates } from 'constant';
import { Title, Container } from 'styled/base';
import { BreadCrumb } from 'components';
import { mergeObject } from 'utils';
import { useHistory } from 'react-router-dom';
import LocationForm from 'pages/Register/LocationForm';
import GeneralInfoForm from 'pages/Register/GeneralInfoForm';
import CareerForm from 'pages/Register/CarrerForm';
import DocumentationForm from 'pages/Register/DocumentationForm';

const Register = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [store, setStore] = useState(initialStates.student);

  const handleNext = (values) => {
    setStep(step + 1);
    setStore({ ...store, ...values });
  };

  const handleBack = (values) => {
    setStep(step - 1);
    setStore(mergeObject(values, store));
  };

  const handleCancel = () => history.push('/');

  const handleSubmit = (values) => window.alert(`Registro: ${JSON.stringify(values)}`);

  return (
    <Container>
      <Title>Register</Title>
      <BreadCrumb selectedStep={step + 1} />
      {step === 0 && (
        <GeneralInfoForm onSubmit={handleNext} onCancel={handleCancel} initialValues={store} />
      )}
      {step === 1 && (
        <LocationForm onSubmit={handleNext} onBack={handleBack} initialValues={store} />
      )}
      {step === 2 && <CareerForm onSubmit={handleNext} onBack={handleBack} initialValues={store} />}
      {step === 3 && (
        <DocumentationForm
          onSubmit={handleSubmit}
          onBack={handleBack}
          onCancel={handleCancel}
          initialValues={store}
        />
      )}
    </Container>
  );
};

export default Register;
