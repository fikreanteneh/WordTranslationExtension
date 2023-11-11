import * as yup from 'yup';


export const LanguageValidate = yup.object().shape({
  Language: yup.string().required("Language is required and must be a string"),
});