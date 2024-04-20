import * as Yup from 'yup';
export const validationSchemaPrins = (expresion) => {
    return Yup.object().shape({
        campo: Yup.string().required('Ingrese el valor del campo').matches(expresion?.regular_expresion ?? "", expresion?.error ?? "error"),
    });
}

export const validationExpresion = ()=> {
    return Yup.object().shape({
     regular_expresion: Yup.string().required('Ingrese la expresión regular'),
     error: Yup.string().required('Ingrese el error'),
     nombre: Yup.string().required('Ingrese el nombre'),
   });
 }