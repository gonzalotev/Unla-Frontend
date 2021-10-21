import React, { useState } from 'react';
import { initialStates } from 'constant';
import { Title, Container } from 'styled/base';
import { BreadCrumb, Footer, Header } from 'components';
import { mergeObject } from 'utils';
import { useHistory } from 'react-router-dom';
import LocationForm from 'pages/Register/LocationForm';
import GeneralInfoForm from 'pages/Register/GeneralInfoForm';
import CareerForm from 'pages/Register/CarrerForm';
import DocumentationForm from 'pages/Register/DocumentationForm';
import { TextAlert } from './styled';

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
      <Header />
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
      <TextAlert>Toda la información personal que nos brinde es de carácter confidencial</TextAlert>
      <TextAlert>Los campos con * son obligatorios para avanzar con la gestión</TextAlert>
      <Footer />
    </Container>
  );
};

export default Register;
