import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  terms: Yup.bool().oneOf([true], 'Debe aceptar los términos y condiciones.'),
});

export default validationSchema;
