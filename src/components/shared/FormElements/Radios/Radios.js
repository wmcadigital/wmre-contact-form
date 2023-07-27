import React from 'react';
import PropTypes from 'prop-types';
import dompurify from 'dompurify';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import Radio from './Radio/Radio';

const { sanitize } = dompurify;

const Radios = ({ name, classes, label, radios, fieldValidation }) => {
  const { errors } = useFormContext();

  return (
    <div className={`wmre-fe-group ${errors[name] && 'wmre-fe-group--error'} ${classes}`}>
      <fieldset className="wmre-fe-fieldset">
        <legend className="wmre-fe-fieldset__legend">
          {label && <h2 className="wmre-fe-question">{label}</h2>}
          {/* If there is an error, show here */}
          {errors[name] && (
            <span
              className="wmre-fe-error-message"
              dangerouslySetInnerHTML={{
                __html: sanitize(errors[name].message),
              }}
            />
          )}
        </legend>
        <div className="wmre-fe-radios">
          {/* Loop through radios and display each radio button */}
          {radios.map((radio) => (
            <Radio
              key={radio.text}
              name={name}
              text={radio.text}
              value={radio.value}
              fieldValidation={fieldValidation}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
};

// PropTypes
Radios.propTypes = {
  fieldValidation: PropTypes.func,
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  radios: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.string)).isRequired,
};

Radios.defaultProps = {
  fieldValidation: null,
  classes: null,
  label: null,
};

export default Radios;
