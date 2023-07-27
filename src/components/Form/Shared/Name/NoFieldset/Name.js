/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Name = () => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const { register, showGenericError } = useStepLogic(formRef); // Custom hook for handling continue button (validation, errors etc)

  // Labels used on inputs and for validation
  const fNameLabel = 'First name';
  const lNameLabel = 'Last name';

  // Logic used to validate fields
  const fieldValidation = (name) => {
    return register({ required: `${name} is required` });
  };

  return (
    <div>
      {/* Show generic error message */}
      {showGenericError}

      <Input
        className="wmre-col-1 wmre-col-lg-3-4"
        name="Firstname"
        label={fNameLabel}
        autocomplete="given-name"
        fieldValidation={fieldValidation(fNameLabel)}
      />
      <Input
        className="wmre-col-1 wmre-col-lg-3-4"
        name="LastName"
        label={lNameLabel}
        autocomplete="family-name"
        fieldValidation={fieldValidation(lNameLabel)}
      />
    </div>
  );
};

export default Name;
