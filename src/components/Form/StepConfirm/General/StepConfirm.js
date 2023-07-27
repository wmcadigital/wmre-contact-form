/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useSubmitForm from '../../useSubmitForm';
import SummarySection from './StepSummarySection';
import Step9ConsentForm from './StepConsentForm';
import { FormDataContext } from '../../../../globalState/FormDataContext';
import Button from '../../../shared/Button/Button';

function StepConfirm({ setFormSubmitStatus }) {
  const [formDataState, formDataDispatch] = useContext(FormDataContext);
  // Get handleSubmit fn and isFetching from custom hook which handles submitting data to API (this is used in the last step[4])
  const { handleSubmit, isFetching, APIErrorMessage } = useSubmitForm(setFormSubmitStatus);
  useEffect(() => {
    if (formDataState.currentStep === 4) {
      formDataDispatch({
        type: 'REACHED_CONFIRMATION',
        payload: true,
      });
    }
  }, [formDataDispatch, formDataState.currentStep]);

  return (
    <form onSubmit={handleSubmit} data-private>
      {/* If we get any errors back from the server, show here */}
      {APIErrorMessage && <span className="wmre-fe-error-message">{APIErrorMessage}</span>}
      <SummarySection />

      <div className="wmre-col-1">
        {formDataState.formData.EmailAlert === 'yes' && !formDataState.formData.ExistingUser && (
          <Step9ConsentForm />
        )}
        <Button
          btnClass="wmre-btn--start wmre-m-t-lg wmre-col-1 wmre-col-sm-auto"
          disabled={isFetching}
          iconRight="general-chevron-right"
          isFetching={isFetching}
          type="submit"
          text="Accept and send"
        />
      </div>
    </form>
  );
}

StepConfirm.propTypes = {
  setFormSubmitStatus: PropTypes.func.isRequired,
};

export default StepConfirm;
