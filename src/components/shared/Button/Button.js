// Import packages
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/shared/Icon/Icon';

const Button = ({
  btnClass,
  disabled,
  iconLeft,
  iconRight,
  isActive,
  isFetching,
  onClick,
  text,
  title,
  type,
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      title={title}
      className={`wmre-btn ${btnClass} ${isActive ? 'wmre-is--active' : ''} ${
        disabled ? 'wmre-btn--disabled' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* If icon left is set then call icon component and inject correct svg */}
      {iconLeft ? <Icon iconClass="wmre-btn__icon" iconName={iconLeft} /> : null}

      {/* button text will go here, if any */}
      {text}

      {/* If API is fetching show spinner on button */}
      {isFetching ? (
        <div
          className="wmre-loader wmre-loader--btn wmre-btn__icon wmre-btn__icon--right"
          role="alert"
          aria-live="assertive"
        >
          <p className="wmre-loader__content">Content is loading...</p>
        </div>
      ) : (
        /* If icon right is set then call icon component and inject correct svg */
        iconRight && <Icon className="wmre-btn__icon wmre-btn__icon--right" iconName={iconRight} />
      )}
    </button>
  );
};

// Set props
Button.propTypes = {
  btnClass: PropTypes.string, // Set custom button classes, will default to wmre-btn (primary btn)
  disabled: PropTypes.bool, // Sets if the button is disabled or not
  iconLeft: PropTypes.string, // Set icon left on button
  iconRight: PropTypes.string, // Set icon right on button
  isActive: PropTypes.bool, // If button is active, add active class
  isFetching: PropTypes.bool,
  onClick: PropTypes.func, // Set an onclick event
  text: PropTypes.string, // text inside button
  type: PropTypes.string, // button type, by default it is type="button"
  title: PropTypes.string, // title on the button
};

Button.defaultProps = {
  btnClass: '',
  disabled: false,
  iconLeft: null,
  iconRight: null,
  isActive: false,
  isFetching: false,
  onClick: null,
  text: '',
  title: null,
  type: 'button',
};

export default Button;
