import React, { useState, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
// Import components
import GenericError from 'components/shared/Errors/GenericError';
import Button from 'components/shared/Button/Button';

const useStepLogic = (formRef) => {
  const { register, errors, trigger, getValues } = useFormContext(); // Get useForm methods
  const [formDataState, formDataDispatch] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext
  const [isContinuePressed, setIsContinuePressed] = useState(false); // State for tracking if continue has been pressed

  // Function for setting the step of the form
  const setStep = (step) => {
    formDataDispatch({
      type: 'UPDATE_STEP',
      payload: step,
    });
  };

  // Update the current step to the correct one depending on users selection
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await trigger();
    setIsContinuePressed(true);
    // if no errors
    if (result) {
      setStep(formDataState.hasReachedConfirmation ? 4 : formDataState.currentStep + 1);

      if (Object.keys(getValues()).includes('UploadInvitation')) {
        const payload = getValues();

        // upload ticket key is no longer needed
        delete payload.UploadInvitation;

        const file = getValues('UploadInvitation')[0];

        const PhotoName = file.name;

        const PhotoExtension = file.type.split('/')[1]; // => image/png (split at '/' and grab second part 'png')
        // Start base64'n our uploaded image
        const reader = new FileReader(); // Start new file reader
        reader.readAsDataURL(file); // Read file as dataURL

        // When loaded
        reader.onloadend = () => {
          // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
          const PhotoBase64 = reader.result.replace(/^data:.+;base64,/, '');

          // Update our formData with the base64Extension and Base64 photo
          formDataDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { ...payload, PhotoName, PhotoExtension, PhotoBase64 },
          });
        };
      }

      formDataDispatch({ type: 'UPDATE_FORM_DATA', payload: getValues() });
    }
    // else, errors are true...
    else {
      window.scrollTo(0, formRef.current.offsetTop); // Scroll to top of form
    }
  };

  // Continue button
  const continueButton = (isFetching) => (
    <Button
      btnClass="wmre-btn wmre-col-1 wmre-col-sm-auto"
      type="submit"
      text="Continue"
      isFetching={isFetching}
    />
  );

  // If errors object has any keys and continue button is pressed then we should show generic error component
  const showGenericError = Object.keys(errors).length > 0 && isContinuePressed && <GenericError />;

  return {
    setStep,
    register,
    handleSubmit,
    showGenericError,
    continueButton,
    formDataState,
    formDataDispatch,
  };
};

export default useStepLogic;
