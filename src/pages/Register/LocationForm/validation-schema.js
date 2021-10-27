import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  state: Yup.number().required('Requerido.'),
  department: Yup.string().required('Requerido.'),
  street: Yup.string().required('Requerido.'),
  doorNumber: Yup.number().required('Requerido.'),
  zipCode: Yup.number().required('Requerido'),
});

export default validationSchema;
