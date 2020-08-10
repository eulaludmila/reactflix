import { useState } from 'react';

// Custom Hook - Obrigatório o use
function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  
  // Mudança de estado
  function handleChangeInput(target) {
    const { name, value } = target;
  
    setValues({
      ...values,
      [name]: value,
    });
  }
  
  // Limpar Campos
  function handleCleanInput() {
    setValues(valoresIniciais);
  }
  
  return {
    handleChangeInput,
    values,
    handleCleanInput,
  };
}

export default useForm;
