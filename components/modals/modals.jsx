"use client";
import React from 'react';
import { useState, useEffect } from 'react';
export const ModalExpresion = ({ isOpen, onClose, onSubmit, registerExpresion, expresionErrors, handleSubmitExpresion, addExpresion }) => {
  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-headline">
                    Agregar Expresión Regular
                  </h3>
                  <div className="mt-2">
                    <form onSubmit={handleSubmitExpresion(addExpresion)}>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="regular_expresion">
                          Expresión Regular
                        </label>
                        <input {...registerExpresion('regular_expresion')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="regular_expresion" type="text" placeholder="Expresión Regular" />
                        {expresionErrors.regular_expresion && <p className="text-red-500 text-xs italic">{expresionErrors.regular_expresion.message}</p>}
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="error">
                          Error
                        </label>
                        <input {...registerExpresion('error')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="error" type="text" placeholder="Error" />
                        {expresionErrors.error && <p className="text-red-500 text-xs italic">{expresionErrors.error.message}</p>}
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                          Nombre
                        </label>
                        <input {...registerExpresion('nombre')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Nombre" />
                        {expresionErrors.nombre && <p className="text-red-500 text-xs italic">{expresionErrors.nombre.message}</p>}
                      </div>
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Agregar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button onClick={onClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};


export const ModalListExpressions = ({ isOpen, onClose, expresions, handleDeleteExpresion }) => {

  const [newExpresions, setNewExpresions] = useState(expresions);

  useEffect(() => {
    setNewExpresions(expresions);
  }, [expresions]);

  const deleteExpresion = (id) => {
    window.localStorage.setItem('expresions', JSON.stringify(expresions.filter(expresion => expresion.id !== id)));
    setNewExpresions(newExpresions.filter(expresion => expresion.id !== id));
    handleDeleteExpresion(id);
  }

  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex justify-center align-middle items-center">
                <div className="mt-3 text-center ">
                  <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-headline">
                    Lista de Expresiones
                  </h3>
                  <div className="mt-2 text-gray-700 text-sm max-h-60 overflow-y-auto">
                    <ul>
                      {newExpresions.map(expresion => (
                        <li key={expresion.id} className="flex items-center justify-between mb-2">
                          <span>{expresion.nombre}</span>
                          <button onClick={() => deleteExpresion(expresion.id)} className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button onClick={onClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}