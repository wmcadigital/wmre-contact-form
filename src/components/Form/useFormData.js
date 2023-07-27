import { useContext } from 'react';
import { FormDataContext } from '../../globalState/FormDataContext';

const useFormData = () => {
  const [formDataState] = useContext(FormDataContext);

  const { Firstname, LastName, Phone } = formDataState.formData;
  return {
    Firstname,
    LastName,
    Phone,
  };
};

export default useFormData;
