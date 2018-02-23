import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const formStyle = {
      backgroundColor: '#2f3341'
    };
    return (
      <div className="card rounded-2" style={formStyle}>
        <div className="card-header">
          <p className="text-center">Already have an account?</p>
          <h3 className="mb-0 text-center">Login</h3>
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
            <div className="form-group">
              <label htmlFor="uname1">Username</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="uname1"
                id="uname1"
                required=""
              />
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
