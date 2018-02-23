import React from 'react';
import * as styles from './styles.module.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const classCard = ['card rounded-2', styles.loginform_bkg].join(' ');
    const alreadyClass = ['text-center mb-0', styles.already].join(' ');
    const cardHClass = ['card-header', styles.card_header].join(' ');
    return (
      <div className={classCard}>
        <div className={cardHClass}>
          <p className={alreadyClass}>Already have an account?</p>
          <h3 className="mb-0 text-center text-white">Login from here</h3>
        </div>
        <div className="card-body">
          <form
            className="form"
            role="form"
            autoComplete="off"
            id="formLogin"
            noValidate=""
            method="POST"
          >
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text fa fa-user rounded-0" />
              </div>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                placeholder="Username"
              />
              <div className="input-group-append">
                <span className="input-group-text span-check rounded-0" />
              </div>
              <div className="invalid-feedback">Oops, you missed this one.</div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-0"
                id="pwd1"
                required=""
                autoComplete="new-password"
              />
              <div className="invalid-feedback">Enter your password too!</div>
            </div>
            <div>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-indicator" />
                <span className="custom-control-description small text-dark">
                  Remember me on this computer
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-success btn-lg float-right"
              id="btnLogin"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
