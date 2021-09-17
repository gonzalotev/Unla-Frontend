import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido")
    .required("Requerido"),
    password: Yup.string()
    .min(8, "Contraseña demaciado corta")
    .max(15, "Contraseña demaciado larga")
    .required("Requerido"),
  });

export default validationSchema;