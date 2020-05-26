import PropTypes from 'prop-types';
import React from 'react';

import GoogleIcon from '../../../images/google.svg';

function GoogleButton(props) {
  return (
    <a
      className="google-button"
      href="/auth/google/"
    >
      <GoogleIcon className="google-icon" role="img" aria-label="Google Logo" focusable="false" />
      <span>{props.buttonText}</span>
    </a>
  );
}

GoogleButton.propTypes = {
  buttonText: PropTypes.string.isRequired
};

export default GoogleButton;
