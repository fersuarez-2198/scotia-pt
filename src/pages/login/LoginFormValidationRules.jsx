export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Correo requerido";
  } /* else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo inválido";
  } */
  if (!values.password) {
    errors.password = "Contraseña requerida";
  } else if (values.password.length < 5) {
    errors.password = "Contraseña debe tener más de 5 caracteres";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Contraseña debe contener al menos 1 número";
  } else if (!/[!@#$%&?*]/g.test(values.password)) {
    errors.password = "Contraseña debe contener al menos 1 caracter especial";
  } else if (!/[A-Z]/g.test(values.password)) {
    errors.password = "Contraseña debe contener al menos una mayúscula";
  }
  return errors;
}
