import React, { PropTypes } from 'react';
import { domOnlyProps } from '../../../utils/reduxFormUtils';

function SignupForm(props) {
  const { fields: { username, email, password, confirmPassword }, handleSubmit, submitting, invalid, pristine } = props;
  return (
    <form className="signup-form" onSubmit={handleSubmit(props.signUpUser.bind(this, props.previousPath))}>
      <p className="login-form__subtitle">Username</p>
      <p className="signup-form__field">
        <input
          className="signup-form__username-input"
          aria-label="username"
          type="text"
          {...domOnlyProps(username)}
        />
        {username.touched && username.error && <span className="form-error">{username.error}</span>}
      </p>
      <p className="login-form__subtitle">Email</p>
      <p className="signup-form__field">
        <input
          className="signup-form__email-input"
          aria-label="email"
          type="text"
          {...domOnlyProps(email)}
        />
        {email.touched && email.error && <span className="form-error">{email.error}</span>}
      </p>
      <p className="login-form__subtitle">Password</p>
      <p className="signup-form__field">
        <input
          className="signup-form__password-input"
          aria-label="password"
          type="password"
          {...domOnlyProps(password)}
        />
        {password.touched && password.error && <span className="form-error">{password.error}</span>}
      </p>
      <p className="login-form__subtitle">Confirm Password</p>
      <p className="signup-form__field">
        <input
          className="signup-form__confirm-password-input"
          type="password"
          aria-label="confirm password"
          {...domOnlyProps(confirmPassword)}
        />
        {confirmPassword.touched && confirmPassword.error && <span className="form-error">{confirmPassword.error}</span>}
      </p>
      <input type="submit" disabled={submitting || invalid || pristine} value="Sign Up" aria-label="sign up" />
    </form>
  );
}

SignupForm.propTypes = {
  fields: PropTypes.shape({
    username: PropTypes.object.isRequired,
    email: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired,
    confirmPassword: PropTypes.object.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  previousPath: PropTypes.string.isRequired
};

export default SignupForm;
