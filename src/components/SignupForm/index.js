import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.module.css';

class SignupForm extends React.Component {
  render() {
    const classCard = ['card rounded-2', styles.signupform_bkg].join(' ');
    const alreadyClass = ['text-center mb-0', styles.already].join(' ');
    const cardHClass = ['card-header', styles.card_header].join(' ');
    const signupClass = [
      'btn btn-lg col-8 mx-auto rounded-0',
      styles.btn_singup
    ].join(' ');
    return (
      <div className={classCard}>
        <div className={cardHClass}>
          <p className={alreadyClass}>New User?</p>
          <h3 className="mb-0 text-center text-white">Create an account</h3>
        </div>
        <div className="card-body">
          <form
            className="form"
            role="form"
            autoComplete="off"
            id="formLogin"
            novalidate=""
            method="POST"
          >
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text fa fa-user rounded-0 d-inline-flex" />
              </div>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                placeholder="Your Full Name"
              />
              <div className="input-group-append">
                <span className="input-group-text span-check rounded-0" />
              </div>
              <div className="invalid-feedback">Oops, you missed this one.</div>
            </div>
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
                placeholder="Email id"
              />
              <div className="input-group-append">
                <span className="input-group-text span-check rounded-0" />
              </div>
              <div className="invalid-feedback">Input your Email id</div>
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text fa fa-lock rounded-0 d-inline-flex" />
              </div>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                placeholder="Confirm Your password"
              />
              <div className="input-group-append">
                <span className="input-group-text span-check rounded-0" />
              </div>
              <div className="invalid-feedback">Confirm your password.</div>
            </div>
            <div className="ml-1">
              <label className="custom-checkbox color-grey">
                By clicking I accept Crypto Gambling Game{' '}
                <Link className="color-yellow" to="/">
                  {' '}
                  Terms & Conditions.{' '}
                </Link>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="row">
              <button className={signupClass} id="btnLogin">
                <b>Create an account</b>
              </button>
            </div>
            <div className="row mt-2">
              <p className="text-center color-grey w-100">
                Already have an account{' '}
                <Link className="color-yellow" to="/login">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
