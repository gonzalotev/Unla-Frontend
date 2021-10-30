import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  terms: Yup.bool().oneOf([true], 'Debe aceptar los términos y condiciones.'),
  inscription: Yup.string().required('Requerido.'),
  carrer: Yup.string().required('Requerido.'),
  rotation: Yup.string().required('Requerido.'),
});

export default validationSchema;
