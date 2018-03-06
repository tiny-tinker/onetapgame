import React from 'react';
import Dashboard from '../../components/Dashboard';
import * as styles from './styles.module.css';

class AffiliatePage extends React.Component {
  render() {
    return (
      <Dashboard>
        <div className={styles.container}>
          <p className={['mb-1', styles.title].join(' ')}>
            <b>My Affiliate Link</b>
          </p>
          <hr className={[styles.divider, 'mt-0 mb-0'].join(' ')} />
          <div className="row h-100">
            <div className="col-9">
              <br />
              <br />
              <div className="row">
                <div className={styles.url}>
                  <input className={styles.urlInput} />
                </div>
                <a className={styles.copy}>
                  <b>Copy</b>
                </a>
              </div>
            </div>
            <div className={['col-3 h-100', styles.rightBox].join(' ')}>
              <p className={styles.subTitle}>My Affiliates:</p>
              <p className={styles.value}>556</p>
              <hr className={styles.divider} />
              <p className={styles.subTitle}>Affiliates Earning:</p>
              <p className={styles.value}>25.03 Eth</p>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default AffiliatePage;
