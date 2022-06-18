import * as yup from "yup";
let forgotPassSchema = yup.object().shape({
    email: yup.string().email("please enter a valid email").required("Email address is required"),
});

export default module = forgotPassSchema;
