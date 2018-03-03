import React from 'react';
import Dashboard from '../../components/Dashboard';
import * as styles from './styles.module.css';

class ProfilePage extends React.Component {
  render() {
    return (
      <Dashboard>
        <div className={styles.container}>
          <p className={styles.title}>My Profile</p>
          <hr className={styles.divider} />
          <div className="row">
            <div className="col-5">
              <p className="mb-1">First Name</p>
              <input className={styles.inputForm} />
            </div>
            <div className="col-5 offset-2">
              <p className="mb-1">Last Name</p>
              <input className={styles.inputForm} />
            </div>
          </div>
          <br />
          <p className="mb-1">Address</p>
          <div>
            <input className={[styles.inputForm, 'mb-3'].join(' ')} />
          </div>
          <div>
            <input className={styles.inputForm} />
          </div>
          <br />
          <div className="row">
            <div className="col pr-1">
              <p className="mb-1">Zip Code</p>
              <input className={styles.inputForm} />
            </div>
            <div className="col pl-1 pr-1">
              <p className="mb-1">City</p>
              <input className={styles.inputForm} />
            </div>
            <div className="col-3 pl-1">
              <p className="mb-1">Country</p>
              <select className={styles.inputForm}>
                <option>China</option>
                <option>United States</option>
              </select>
            </div>
          </div>
          <br />
          <br />
          <a className={styles.btnSave}>Save Update</a>
          <p className={['d-inline-block', styles.updateSuccess].join(' ')}>
            &nbsp;&nbsp;<i
              className={['fa fa-check', styles.check].join(' ')}
            />Update Change Successfully
          </p>
        </div>
      </Dashboard>
    );
  }
}

export default ProfilePage;
