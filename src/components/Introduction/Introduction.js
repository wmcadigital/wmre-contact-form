import React from 'react';
import PropTypes from 'prop-types';

// Import components
import Icon from '../shared/Icon/Icon';

const Intro = ({ setIsFormStarted }) => {
  const handleClick = () => {
    setIsFormStarted(true);
  };

  return (
    <div className="wmre-col-1 wmre-col-md-2-3">
      <h1>Contact us</h1>
      <p>
        You’ll need to contact Transport for West Midlands if your enquiry is about information,
        journey planning and transport disruptions.
      </p>
      <p>
        You’ll need to contact your local council if your enquiry is about general council services.
        For example, bin collections and council tax.
      </p>

      <h2>Find who you need to contact</h2>
      <p>
        Answer questions and we&apos;ll direct you to the right team so we can respond to your query
        faster.
      </p>

      <button
        type="button"
        className="wmre-btn wmre-btn--start wmre-m-t-xl wmre-m-b-xl wmre-col-1 wmre-col-sm-auto"
        onClick={handleClick}
      >
        Start now
        <Icon className="wmre-btn__icon wmre-btn__icon--right" iconName="general-chevron-right" />
      </button>
    </div>
  );
};
Intro.propTypes = {
  setIsFormStarted: PropTypes.func.isRequired,
};
export default Intro;
