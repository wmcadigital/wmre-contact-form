import React, { useContext, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';

// Import components
import SharedEnquiry from './Shared/Enquiry/Enquiry';
import SharedContact from './Shared/Contact/Contact';
import SharedName from './Shared/Name/Fieldset/Name';
import SubmitSuccess from './SubmitConfirmation/Success';
import SubmitError from './SubmitConfirmation/Error';
import GeneralConfirmation from './StepConfirm/General/StepConfirm';

// Custom Hooks
import useTrackFormAbandonment from './useTrackFormAbandonment';

// Import styling
import s from './Form.module.scss';

const Form = ({ formSubmitStatus, setFormSubmitStatus, isRecoverLinkPressed }) => {
  // Handle scrolling to the top of the summary page
  const formRef = useRef();
  const scrollToTopOfSummary = useCallback(() => {
    const page = document.getElementsByClassName('wmre-html')[0];
    const pageOffset = page.scrollTop;
    const formOffset = formRef.current.offsetTop;
    if (formOffset >= pageOffset) return;
    page.scrollTo(0, formOffset - 20);
  }, []);

  const [formDataState, formDataDispatch] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext
  const { currentStep } = formDataState; // Destructure step from state
  // const { EnquiryType, StrategyEnquiry, MayorEnquiry, OtherEnquiry } = formDataState.formData;
  const methods = useForm({
    mode: 'onBlur',
  }); // Trigger validation onBlur events (config for react hook form lib)

  useEffect(() => {
    if (currentStep === 9) scrollToTopOfSummary();
  }, [currentStep, scrollToTopOfSummary]);

  useEffect(() => {
    if (isRecoverLinkPressed) {
      formDataDispatch({
        type: 'UPDATE_STEP',
        payload: 0,
      });
    }
  }, [formDataDispatch, isRecoverLinkPressed]);

  useTrackFormAbandonment(currentStep, formSubmitStatus);

  // Show debug options for below (this should be deleted on release)
  const debugStepOptions = [0, 1, 2, 3, 4, 5, 6];

  let stepToGoTo;

  if (currentStep > 1 && currentStep < 6) {
    stepToGoTo = currentStep - 1;
  }

  return (
    <>
      {/* pass all methods into the context */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FormProvider {...methods}>
        <div className="wmre-col-1 wmre-col-md-2-3">
          {stepToGoTo && (
            <div className="wmre-col-1 wmre-m-b-md">
              <button
                type="button"
                className="wmre-btn wmre-btn--link"
                onClick={() =>
                  formDataDispatch({
                    type: 'UPDATE_STEP',
                    payload: stepToGoTo,
                  })
                }
              >
                &lt; Back
              </button>
            </div>
          )}

          <div
            className={formSubmitStatus === null ? `${s.formWrapper} wmre-p-lg ` : ''}
            ref={formRef}
          >
            {/* Start of form */}
            {currentStep === 1 && <SharedName setFormSubmitStatus={setFormSubmitStatus} />}
            {currentStep === 2 && <SharedContact />}
            {currentStep === 3 && <SharedEnquiry />}
            {currentStep === 4 && <GeneralConfirmation setFormSubmitStatus={setFormSubmitStatus} />}

            {/* for testing only */}
            {currentStep === 5 && <SubmitSuccess />}
            {currentStep === 6 && <SubmitError />}
          </div>
        </div>
        {/* If in development based on envs then show form debugging */}
        {process.env.NODE_ENV !== 'production' && (
          <div
            className="wmre-col-1 wmre-col-md-1-4 wmre-p-md"
            style={{
              overflowX: 'auto',
              position: 'fixed',
              right: 0,
            }}
          >
            <pre>{JSON.stringify(formDataState, null, 2)}</pre>
            <br />
            <div className="wmre-col-1">
              Select step: {}
              <select
                onChange={(e) =>
                  formDataDispatch({
                    type: 'UPDATE_STEP',
                    payload: +e.target.value,
                  })
                }
                onBlur={(e) =>
                  formDataDispatch({
                    type: 'UPDATE_STEP',
                    payload: +e.target.value,
                  })
                }
                value={currentStep}
              >
                {debugStepOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </FormProvider>
    </>
  );
};

Form.propTypes = {
  formSubmitStatus: PropTypes.bool,
  setFormSubmitStatus: PropTypes.func.isRequired,
  setIsFormStarted: PropTypes.func.isRequired,
  isRecoverLinkPressed: PropTypes.bool,
  setIsRecoverLinkPressed: PropTypes.func.isRequired,
};

Form.defaultProps = {
  formSubmitStatus: null,
  isRecoverLinkPressed: false,
};

export default Form;
