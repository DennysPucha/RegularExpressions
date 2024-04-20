"use client";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { Expresions } from '@/components/expresions/ListExpresion';
import { ModalExpresion, ModalListExpressions } from '@/components/modals/modals';
import { FormExpresion } from '@/components/forms/formExpresion';
import { onSubmitHandler } from '@/components/functions/onSubmit';
import swal from 'sweetalert2'; 
import { validationExpresion,validationSchemaPrins } from '@/components/schemas/schemas';
export default function Home() {
  const [expresion, setExpresion] = useState('');
  const [selectedExpresion, setSelectedExpresion] = useState('');
  const [listExpresions, setListExpresions] = useState(Expresions);
  const [enableModal, setEnableModal] = useState(false);
  const [enableModalExpresion, setEnableModalExpresion] = useState(false);
  
  useEffect(() => {
    const expresion = listExpresions.find(expresion => expresion.nombre === selectedExpresion);
    setExpresion(expresion);
  }, [selectedExpresion]);

  useEffect(() => {
    const expresions = window.localStorage.getItem('expresions');
    if (expresions) {
      setListExpresions(JSON.parse(expresions));
    }
  }, []);


  const validationSchema = validationSchemaPrins(expresion);
  const validationSchemaExpresion = validationExpresion();
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit: handleSubmitForm, formState: { errors: formErrors } } = useForm(formOptions);
  const { register: registerExpresion, handleSubmit: handleSubmitExpresion, formState: { errors: expresionErrors } } = useForm({ resolver: yupResolver(validationSchemaExpresion) });

  const addExpresion = (data) => {
    const expresion = {
      id: crypto.randomUUID(),
      regular_expresion: data.regular_expresion,
      error: data.error,
      nombre: data.nombre
    }
    setListExpresions([...listExpresions, expresion]);
    window.localStorage.setItem('expresions', JSON.stringify([...listExpresions, expresion]));
    setEnableModal(false);
    swal.fire({icon: 'success',title: 'Correcto',text: 'Expresión agregada correctamente'})
  }

  const onSubmit = () => {
    onSubmitHandler(selectedExpresion);   
  };

  const handleDeleteExpresion = (id) => {
       setListExpresions(listExpresions.filter(expresion => expresion.id !== id));
       setExpresion('');
       setSelectedExpresion('');
  };

  return (
    <div className='justify-center items-center'>
      <h1 className="text-4xl text-center mt-10"><strong>Expresiones Regulares</strong></h1>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-xs">
          <div className='flex mb-4 grid-rows-2'>
            <button onClick={() => setEnableModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"> Agregar Expresión Regular</button>
            <button onClick={()=> setEnableModalExpresion(true)} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> Expresiones</button>
          </div>
          <FormExpresion
            expresion={expresion}
            formErrors={formErrors}
            setSelectedExpresion={setSelectedExpresion}
            registerCampo={register}
            listExpresions={listExpresions}
            handleSubmitForm={handleSubmitForm}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <ModalExpresion
        isOpen={enableModal}
        onClose={() => setEnableModal(false)}
        onSubmit={onSubmit}
        registerExpresion={registerExpresion}
        expresionErrors={expresionErrors}
        handleSubmitExpresion={handleSubmitExpresion}
        addExpresion={addExpresion}
      />
      <ModalListExpressions
        isOpen={enableModalExpresion}
        onClose={() => setEnableModalExpresion(false)}
        expresions={listExpresions}
        handleDeleteExpresion={handleDeleteExpresion}
      />
    </div>
  );
}