import React, { useContext } from 'react';
// Hooks

// Context
import { FormDataContext } from 'globalState/FormDataContext';
// Components
import Table from 'components/shared/Table/Table';
import Table2 from 'components/shared/Table/Table-2-col';
import ConsentForm from './StepConsentForm';

function StepSummarySection() {
  const [formDataState, formDataDispatch] = useContext(FormDataContext);
  const { Firstname, LastName, Enquiry, ContactEmail, Phone } = formDataState.formData;

  const setStepInContext = (st) => {
    formDataDispatch({
      type: 'UPDATE_STEP',
      payload: st,
    });
  };

  const title = 'Check your answers';

  /* Table Data */

  // enquiry
  const dataLine1 = [];
  if (Enquiry) {
    dataLine1.push(<span>{Enquiry}</span>);
    dataLine1.push(
      <button
        type="button"
        className="wmre-btn wmre-btn--link wmre-float-right"
        onClick={() => {
          setStepInContext(3);
        }}
      >
        Change
      </button>
    );
  }

  // name
  const dataLine2 = [];
  dataLine2.push(<span>Name</span>);
  dataLine2.push(<span>{`${Firstname} ${LastName}`}</span>);
  dataLine2.push(
    <button
      type="button"
      className="wmre-btn wmre-btn--link"
      onClick={() => {
        setStepInContext(1);
      }}
    >
      Change
    </button>
  );

  // contact information
  const dataLine3 = [];
  dataLine3.push(<span>What is your Email Address?</span>);
  if (ContactEmail !== null) {
    dataLine3.push(<span>{ContactEmail}</span>);
  }

  dataLine3.push(
    <button
      type="button"
      className="wmre-btn wmre-btn--link"
      onClick={() => {
        setStepInContext(2);
      }}
    >
      Change
    </button>
  );

  /* End of Table Data */

  const enquiry = [dataLine1];
  const data = [dataLine2, dataLine3];

  if (Phone) {
    data.push(dataLine3);
  }

  return (
    <>
      <div className="wmre-col-1">
        <h2 className="wmre-fe-question wmre-m-t-none">{title}</h2>
        <Table2
          title="About your general enquiry"
          classes=""
          cellClasses={['', '', 'wmre-text-align-right wmre-p-r-none']}
          headers={[]}
          values={enquiry}
          data-private
        />

        <Table
          title="About you"
          classes=""
          cellClasses={['', '', 'wmre-text-align-right wmre-p-r-none']}
          headers={[]}
          values={data}
          data-private
        />

        <h3>Now send your enquiry</h3>
        <p>
          By submitting this enquiry you are confirming that, to the best of your knowledge, the
          details you are providing are correct.
        </p>
        <ConsentForm />
      </div>
    </>
  );
}

export default StepSummarySection;
