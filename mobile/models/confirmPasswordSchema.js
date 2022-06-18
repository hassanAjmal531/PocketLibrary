import * as yup from "yup";

let confirmSchema = yup.object().shape({
    password: yup.string().email("please enter a valid email").required("old password is required"),
    Npassword : yup.string().min(8, ({min})=> `password must be atleast ${min} characters`).required("New Password is required"),
    confirmPassword : yup.string().required("confirm password is required").oneOf([yup.ref('Npassword'), null], 'Confirm Password must match new password'),
});

export default module = confirmSchema;