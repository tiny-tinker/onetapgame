import React from 'react';
import Dashboard from '../../components/Dashboard';
import * as styles from './styles.module.css';

class DepositPage extends React.Component {
  render() {
    return (
      <Dashboard>
        <div className={styles.container}>
          <p className={styles.title}>
            <b>Deposit Fund</b>
          </p>
          <hr className={styles.divider} />
          <p className="text-right">
            My Wallet Balance:{' '}
            <span className={styles.balance}>
              <b>$00.20</b>
            </span>
          </p>
          <hr className={['mb-0', styles.divider].join(' ')} />
          <div className="row h-100">
            <div className={['col h-100', styles.verticalDivider].join(' ')}>
              <p className={styles.depositAmount}>Deposit Amount</p>
              <div className={['row', styles.depositInputContainer].join(' ')}>
                <div className="col-10 pr-0">
                  <input className={styles.depositInput} value="$00.00" />
                </div>
                <div className="col-2 text-left pl-2 position-relative">
                  <div className={styles.unit}>Eth</div>
                </div>
              </div>
              <br />
              <a className={styles.btnDeposit}>
                <b>Deposit Now</b>
              </a>
            </div>
            <div className="col h-100">
              <br />
              <p className="mb-1">
                <b>Recently Deposit</b>
              </p>
              <hr className={['mt-0', styles.subDivider].join(' ')} />
              <div className={styles.depositHistory}>
                <p>Tom S, deposit $10 Eth at 6:00PM, 10-Jan-2018</p>
                <hr className={styles.subDivider} />
                <p>Tom S, deposit $2 Eth at 1:00PM, 08-Jan-2018</p>
                <hr className={styles.subDivider} />
                <p>Tom S, deposit $11 Eth at 5:00PM, 06-Jan-2018</p>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default DepositPage;
