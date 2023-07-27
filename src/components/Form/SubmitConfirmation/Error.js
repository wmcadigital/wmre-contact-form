import React from 'react';
import PropTypes from 'prop-types';

function Error({ isRecoverLinkPressed }) {
  const title = isRecoverLinkPressed
    ? 'Request a link to manage your disruption alerts'
    : 'Contact us form';
  return (
    <div className="wmre-container-alerts-sign-up">
      <div className="wmre-grid">
        <div className="wmre-col-1 wmre-col-sm-2-3">
          <h1>{title}</h1>
        </div>
        <div className="wmre-col-1">
          {/* Error message */}
          <h3>Sorry, there is a problem with this service</h3>
          <p>Try again later.</p>
          <p>
            We have not saved your answers. When the service is available, you will have to start
            again.
          </p>
          <p>
            Contact the{' '}
            <a
              href="https://www.tfwm.org.uk/get-help/contact-us/?utm_source=service&utm_medium=errorpage&utm_campaign=wmre-contact-form"
              title="Customer Services Team Contact Details"
              target="_self"
              className="wmre-link"
            >
              Customer Services team
            </a>{' '}
            if you continue to have problems.
          </p>
        </div>
      </div>
    </div>
  );
}

Error.propTypes = {
  isRecoverLinkPressed: PropTypes.bool.isRequired,
};

export default Error;
