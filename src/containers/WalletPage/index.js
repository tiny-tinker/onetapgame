import React from 'react';
import Dashboard from '../../components/Dashboard';
import * as styles from './styles.module.css';

class WalletPage extends React.Component {
  render() {
    return (
      <Dashboard>
        <div className={styles.container}>
          <p className={styles.title}>My Wallet</p>
          <hr className={styles.divider} />
          <p className={styles.balance}>Available Balance</p>
          <p className={styles.value}>$00.20 Eth</p>
          <hr className={styles.divider} />
          <br />
          <div>
            <a className={styles.depositFund}>Deposit Fund</a>
            <a className={styles.drawFund}>Withdraw Fund</a>
          </div>
          <div className="mt-5">
            <a className={styles.home}>HOME</a>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default WalletPage;
