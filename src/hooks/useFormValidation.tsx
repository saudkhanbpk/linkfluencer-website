import { useState, useEffect } from 'react';

const useFormValidation = (fullName: string, email: string, password: string) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (fullName && email && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [fullName, email, password]);

  return isFormValid;
};

export default useFormValidation;