import React, { PropTypes } from 'react';
import { domOnlyProps } from '../../../utils/reduxFormUtils';

function AccountForm(props) {
  const {
    fields: { username, email, currentPassword, newPassword },
    handleSubmit,
    submitting,
    invalid,
    pristine
  } = props;
  return (
    <form className="form" onSubmit={handleSubmit(props.updateSettings)}>
      <p className="form__field">
        <label htmlFor="email" className="form__label">Email</label>
        <input
          className="form__input"
          aria-label="email"
          type="text"
          id="email"
          {...email}
        />
        {email.touched && email.error && <span className="form-error">{email.error}</span>}
      </p>
      <p className="form__field">
        <label htmlFor="username" className="form__label">User Name</label>
        <input
          className="form__input"
          aria-label="username"
          type="text"
          id="username"
          defaultValue={username}
          {...username}
        />
        {username.touched && username.error && <span className="form-error">{username.error}</span>}
      </p>
      <p className="form__field">
        <label htmlFor="current password" className="form__label">Current Password</label>
        <input
          className="form__input"
          aria-label="currentPassword"
          type="password"
          id="currentPassword"
          {...domOnlyProps(currentPassword)}
        />
        {currentPassword.touched && currentPassword.error && <span className="form-error">{currentPassword.error}</span>}
      </p>
      <p className="form__field">
        <label htmlFor="new password" className="form__label">New Password</label>
        <input
          className="form__input"
          aria-label="newPassword"
          type="password"
          id="newPassword"
          {...domOnlyProps(newPassword)}
        />
        {newPassword.touched && newPassword.error && <span className="form-error">{newPassword.error}</span>}
      </p>
      <input type="submit" disabled={submitting || invalid || pristine} value="Save All Settings" aria-label="updateSettings" />
    </form>
  );
}

AccountForm.propTypes = {
  fields: PropTypes.shape({
    username: PropTypes.object.isRequired,
    email: PropTypes.object.isRequired,
    currentPassword: PropTypes.object.isRequired,
    newPassword: PropTypes.object.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateSettings: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
};

AccountForm.defaultProps = {
  submitting: false,
  pristine: true,
  invalid: false
};

export default AccountForm;
