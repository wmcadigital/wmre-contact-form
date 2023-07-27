import React from 'react';

function Success() {
  // eslint-disable-next-line no-unused-vars

  const title = 'We’ve received your enquiry';

  return (
    <div className="wmre-container-alerts-sign-up">
      <div className="wmre-grid wmre-col-1">
        <div className="wmre-col-1">
          <h1>{title}</h1>
        </div>

        <div className="wmre-col-1">
          <h2>What happens next</h2>
          <p>Thank you for contacting the West Midlands Rail Executive.</p>
          <p>
            We will acknowledge your query and keep you updated on progress until it is resolved.
          </p>
          <p>
            Our Customer Services Centre aim to respond to enquiries within 10 working days.
            However, there may be occasions where this takes longer, as we may need to liase with a
            third party.
          </p>
          <p>
            If you have not received a response within 10 working ddays, please contact our Customer
            Services team.
          </p>

          <h2>Give us a call</h2>
          <div className="wmre-inset-text">
            <b>Transport for West Midlands Customer Services</b>
            <br />
            Phone: 0345 303 6760
            <br />
            <br />
            Mondays, Tuesdays, Thursdays and Fridays, 8am to 6pm
            <br />
            Wednesdays, 10am to 6pm
            <br />
            Saturdays, 9am to 1pm
            <br />
            Sundays and Bank Holidays, Closed
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
