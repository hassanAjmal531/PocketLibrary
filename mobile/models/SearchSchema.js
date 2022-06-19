import * as yup from "yup";
let searchSchema = yup.object().shape({
    search: yup.string().required(),
});

export default module = searchSchema;