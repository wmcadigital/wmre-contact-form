/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import dompurify from 'dompurify';

// Import contexts
import { useFormContext } from 'react-hook-form';
import { FormDataContext } from 'globalState/FormDataContext';

import Icon from '../../Icon/Icon';

const { sanitize } = dompurify;

const InputCheckbox = ({
  fieldValidation,
  name,
  labelValue,
  handleChange,
  labelElement,
  classes,
}) => {
  const [formDataState] = useContext(FormDataContext); // Get the state of form data from FormDataContext
  const { errors } = useFormContext();
  // Set input to render below

  return (
    <div className={`wmre-fe-group ${errors[name] ? 'wmre-fe-group--error' : ''} ${classes}`}>
      {errors[name] && (
        <span
          className="wmre-fe-error-message"
          dangerouslySetInnerHTML={{
            __html: sanitize(errors[name].message),
          }}
        />
      )}

      <label className="wmre-fe-checkboxes__container">
        {labelElement !== null && labelElement}
        {!labelElement && labelValue && (
          <div
            dangerouslySetInnerHTML={{
              __html: sanitize(labelValue),
            }}
          />
        )}
        <input
          ref={fieldValidation}
          defaultChecked={formDataState.formData[name]}
          className="wmre-fe-checkboxes__input"
          onChange={handleChange}
          name={name}
          type="checkbox"
        />
        <span className="wmre-fe-checkboxes__checkmark">
          <Icon className="wmre-fe-checkboxes__icon" iconName="general-checkmark" />
        </span>
      </label>
    </div>
  );
};

InputCheckbox.propTypes = {
  labelValue: PropTypes.string,
  fieldValidation: PropTypes.func,
  handleChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  labelElement: PropTypes.element,
};

InputCheckbox.defaultProps = {
  labelValue: null,
  labelElement: null,
  handleChange: null,
  fieldValidation: null,
  classes: null,
};

export default InputCheckbox;
