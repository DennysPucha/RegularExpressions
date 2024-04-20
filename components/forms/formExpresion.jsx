export const FormExpresion = ({ expresion, formErrors, setSelectedExpresion, registerCampo, listExpresions, handleSubmitForm, onSubmit }) => {
    return (
      <form onSubmit={handleSubmitForm(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            {expresion?.nombre ?? 'Campo'}
          </label>
          <input {...registerCampo('campo')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={expresion?.nombre ?? "campo"} />
          {formErrors.campo && <p className="text-red-500 text-xs italic">{formErrors.campo.message}</p>}
        </div>
  
        <div className='mb-4'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Expresión Regular
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setSelectedExpresion(e.target.value)}>
            <option value=''>Seleccione una expresión</option>
            {listExpresions.map(expresion => (
              <option key={expresion.id} value={expresion.nombre}>{expresion.nombre}</option>
            ))}
          </select>
        </div>
  
        <div className='flex items-center justify-center mt-3'>
          <button type='submit' className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " >verificar</button>
        </div>
      </form>
    );
  }