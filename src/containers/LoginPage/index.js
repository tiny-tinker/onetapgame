import React from 'react';
import LoginForm from '../../components/LoginForm';

class LoginPage extends React.PureComponent {
  render() {
    const loginForm = {
      paddingTop: '150px',
      paddingBottom: '150px'
    };
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-6 mx-auto" style={loginForm}>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
