import React from 'react';
import SignupForm from '../../components/SignupForm';

class SignupPage extends React.Component {
  render() {
    const signupForm = {
      paddingTop: '150px',
      paddingBottom: '150px'
    };
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-6 mx-auto" style={signupForm}>
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
