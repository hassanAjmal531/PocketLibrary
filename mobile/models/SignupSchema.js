import * as yup from 'yup';

let SignUpSchema = yup.object().shape({
    email: yup.string().email("please enter a valid email").required("Email address is required"),
    password : yup.string().min(8, ({min})=> `password must be atleast ${min} characters`).required("Password is required"),
    confirmPassword : yup.string().required("confirm password is required").oneOf([yup.ref('password'), null], 'Confirm Password must match password'),
  });



export default module = SignUpSchema;



