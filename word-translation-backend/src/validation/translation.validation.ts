import * as yup from "yup";

export const TranslationValidate = yup.object().shape({
  Word: yup.string().required("Word is required and must be a string"),
  Language: yup.string().required("Language is required and must be a string"),
  TranslatedLanguage: yup
    .string()
    .required("TranslatedLanguage is required and must be a string"),
  TranslatedWord: yup
    .string()
    .required("TranslatedWord is required and must be a string"),
});
