import { useState, useEffect } from 'react';

const useFormValidation = (email: string, password: string) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (email && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);

  return isFormValid;
};

export default useFormValidation;