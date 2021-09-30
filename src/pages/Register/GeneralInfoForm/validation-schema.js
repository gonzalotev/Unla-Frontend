import * as Yup from 'yup';
import { ALPHABETIC_WITH_DASH } from 'constant/regex';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters.')
    .max(50, 'Maximum 50 characters.')
    .matches(ALPHABETIC_WITH_DASH, { message: 'Invalid field.', excludeEmptyString: true })
    .required('Required.'),
});

export default validationSchema;
