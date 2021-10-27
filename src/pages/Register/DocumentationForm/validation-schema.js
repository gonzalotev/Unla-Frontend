import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  personalPhoto: Yup.string().required('requerido'),
  approvedMattersPhoto: Yup.string().required('requerido'),
  certificatePhoto: Yup.string().required('requerido'),
});

export default validationSchema;
