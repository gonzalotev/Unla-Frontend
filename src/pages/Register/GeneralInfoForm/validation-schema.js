import * as Yup from 'yup';
import { ALPHABETIC_WITH_DASH } from 'constant/regex';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimo 2 caracteres.')
    .max(50, 'Maximo 50 caracteres.')
    .matches(ALPHABETIC_WITH_DASH, { message: 'Invalid field.', excludeEmptyString: true })
    .required('Requerido.'),
  surname: Yup.string()
    .min(2, 'Minimo 2 caracteres.')
    .max(50, 'Maximo 50 caracteres.')
    .matches(ALPHABETIC_WITH_DASH, { message: 'Invalid field.', excludeEmptyString: true })
    .required('Requerido.'),
  email: Yup.string()
    .email()
    .required('Requerido'),
  documentType: Yup.string()
    .required('Requerido'),
  document: Yup.string()
    .min(8, 'Minimo 8 caracteres')
    .max(10, 'Maximo 10 caracteres')
    .matches('')
    .required('Requerido'),
  gender: Yup.string()
    .required('Requerido'),
  birthDate: Yup.string()
    .required('Requerido'),
  nationality: Yup.string()
    .required('Requerido'),
  cellphone: Yup.number()
    .required('Requerido'),
});

export default validationSchema;
