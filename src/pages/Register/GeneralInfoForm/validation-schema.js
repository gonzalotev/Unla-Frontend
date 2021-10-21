import * as Yup from 'yup';
import { ALPHABETIC_WITH_DASH } from 'constant/regex';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters.')
    .max(50, 'Maximum 50 characters.')
    .matches(ALPHABETIC_WITH_DASH, { message: 'Invalid field.', excludeEmptyString: true })
    .required('Requerido.'),
  surname: Yup.string()
    .min(2, 'Minimum 2 characters.')
    .max(50, 'Maximum 50 characters.')
    .matches(ALPHABETIC_WITH_DASH, { message: 'Invalid field.', excludeEmptyString: true })
    .required('Requerido.'),
  email: Yup.string()
    .email()
    .required('Requerido'),
  documentType: Yup.string()
    .required('Requerido'),
  document: Yup.number()
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
