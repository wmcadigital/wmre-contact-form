import React, { useRef } from 'react';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
// Import components
import InputCheckbox from '../../../shared/FormElements/Input/InputCheckbox';

const StepConsentForm = () => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const { register } = useStepLogic(formRef); // Custom hook for handling continue button (validation, errors etc)

  // Labels used on inputs and for validation
  const checkBoxLabel = (
    <>
      Agree to the &nbsp;
      <a
        href="https://wmre.org.uk/terms-and-conditions/"
        target="_blank"
        title="Read our Terms & Conditions"
        rel="noopener noreferrer"
      >
        terms and conditions
      </a>
      &nbsp;
    </>
  );
  const policyCheckBoxLabel = (
    <>
      Agree to the &nbsp;
      <a
        href="https://wmre.org.uk/privacy-statement/"
        target="_blank"
        title="Read our Privacy Policy"
        rel="noopener noreferrer"
      >
        privacy policy
      </a>
      &nbsp;
    </>
  );

  // Logic used to validate the terms field
  const checkboxValidation = register({
    required: 'Agree to terms and conditions before continue',
    validate: {
      shouldBeTrue: (val) => val === true || 'Agree to terms and conditions before continue',
    },
  });
  // Logic used to validate the policy field
  const polictCheckboxValidation = register({
    required: 'Agree to privacy policy before continue',
    validate: {
      shouldBeTrue: (val) => val === true || 'Agree to privacy policy before continue',
    },
  });

  return (
    <fieldset className="wmre-fe-fieldset" ref={formRef}>
      <InputCheckbox
        name="Terms"
        type="checkbox"
        fieldValidation={checkboxValidation}
        labelElement={checkBoxLabel}
      />
      <InputCheckbox
        name="Privacy"
        type="checkbox"
        fieldValidation={polictCheckboxValidation}
        labelElement={policyCheckBoxLabel}
      />
    </fieldset>
  );
};

export default StepConsentForm;
