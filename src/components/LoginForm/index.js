import React from 'react';
import { Link } from 'react-router-dom';
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
    const loginClass = [
      'btn btn-lg col-8 mx-auto rounded-0',
      styles.btn_login
    ].join(' ');
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
                <span className="input-group-text fa fa-user rounded-0 d-inline-flex" />
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text fa fa-lock rounded-0 d-inline-flex" />
              </div>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                placeholder="Your password"
              />
              <div className="input-group-append">
                <span className="input-group-text span-check rounded-0" />
              </div>
              <div className="invalid-feedback">Input your password.</div>
            </div>
            <div className="ml-1">
              <label className="custom-checkbox color-grey">
                Remember me
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="row">
              <button className={loginClass} id="btnLogin">
                <b>Login Now</b>
              </button>
            </div>
            <div className="row mt-3 text-center">
              <p className="w-100">
                <span className="color-grey"> New User? </span>
                <Link className="color-yellow" to="/signup">
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
