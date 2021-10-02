import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  state: Yup.number().required('Required.'),
  department: Yup.number().required('Required.'),
});

export default validationSchema;
