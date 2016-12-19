import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import * as UserActions from '../actions';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import ResetPasswordForm from '../components/ResetPasswordForm';
import classNames from 'classnames';
import InlineSVG from 'react-inlinesvg';
const exitUrl = require('../../../images/exit.svg');
const logoUrl = require('../../../images/p5js-logo.svg');

class ResetPasswordView extends React.Component {
  constructor(props) {
    super(props);
    this.gotoHomePage = this.gotoHomePage.bind(this);
  }

  componentWillMount() {
    this.props.resetPasswordReset();
  }

  gotoHomePage() {
    browserHistory.push('/');
  }

  render() {
    const resetPasswordClass = classNames({
      'reset-password': true,
      'reset-password--submitted': this.props.user.resetPasswordInitiate,
      'form-container': true
    });
    return (
      <div className={resetPasswordClass}>
        <div className="form-container__header">
          <button className="form-container__logo-button" onClick={this.gotoHomePage}>
            <InlineSVG src={logoUrl} alt="p5js Logo" />
          </button>
          <button className="form-container__exit-button" onClick={this.gotoHomePage}>
            <InlineSVG src={exitUrl} alt="Close ResetPassword Page" />
          </button>
        </div>
        <div className="form-container__content">
          <h2 className="form-container__title">Reset Your Password</h2>
          <ResetPasswordForm {...this.props} />
          <p className="reset-password__submitted">
            Your password reset email should arrive shortly. If you don't see it, check
            in your spam folder as sometimes it can end up there.
          </p>
          <p className="form__navigation-options">
            <Link className="form__login-button" to="/login">Log In</Link>
            &nbsp;or&nbsp;
            <Link className="form__signup-button" to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    );
  }
}

ResetPasswordView.propTypes = {
  resetPasswordReset: PropTypes.func.isRequired,
  user: PropTypes.shape({
    resetPasswordInitiate: PropTypes.bool
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

function validate(formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }
  return errors;
}

export default reduxForm({
  form: 'reset-password',
  fields: ['email'],
  validate
}, mapStateToProps, mapDispatchToProps)(ResetPasswordView);
