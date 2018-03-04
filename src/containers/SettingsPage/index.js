import React from 'react';
import Dashboard from '../../components/Dashboard';
import * as styles from './styles.module.css';

class SettingsPage extends React.Component {
  render() {
    return (
      <Dashboard>
        <div className={styles.container}>
          <p className={styles.title}>Settings</p>
          <hr className={styles.divider} />
          <div className="row">
            <div className="col pr-lg-5">
              <p className={styles.subTitle}> Change Password</p>
              <input
                className={styles.inputForm}
                placeholder="Enter your old password"
              />
              <input
                className={styles.inputForm}
                placeholder="Enter your new password"
              />
              <input
                className={styles.inputForm}
                placeholder="Confirm new password"
              />
              <br />
              <br />
              <a className={styles.btnSaveGreen}>Save Change</a>
            </div>
            <div className="col pl-lg-5">
              <p className={styles.subTitle}> Change Email</p>
              <input
                className={styles.inputForm}
                placeholder="username@gmail.com"
              />
              <input
                className={styles.inputForm}
                placeholder="Enter new email id"
              />
              <br />
              <br />
              <a className={styles.btnSaveYellow}>Save Change</a>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default SettingsPage;
