import React from 'react';
import Dashboard from '../../components/Dashboard';
import * as styles from './styles.module.css';

class TransactionsReportPage extends React.Component {
  render() {
    return (
      <Dashboard>
        <div className={styles.container}>
          <p className={styles.title}>
            <b>Transaction History</b>
          </p>
          <hr className={styles.divider} />
          <p className={styles.history}>
            Tom S. withdraw $10 Eth at 6:00 PM, 10-Jan-2018
          </p>
          <hr className={styles.divider} />
          <p className={styles.history}>
            Tom S. withdraw $10 Eth at 6:00 PM, 10-Jan-2018
          </p>
          <hr className={styles.divider} />
          <p className={styles.history}>
            Tom S. withdraw $10 Eth at 6:00 PM, 10-Jan-2018
          </p>
          <hr className={styles.divider} />
          <p className={styles.history}>
            Tom S. withdraw $10 Eth at 6:00 PM, 10-Jan-2018
          </p>
          <hr className={styles.divider} />
          <p className={styles.history}>
            Tom S. withdraw $10 Eth at 6:00 PM, 10-Jan-2018
          </p>
          <hr className={styles.divider} />
          <p className={styles.history}>
            Tom S. withdraw $10 Eth at 6:00 PM, 10-Jan-2018
          </p>
          <hr className={styles.divider} />
          <p>No more results to be shown</p>
        </div>
      </Dashboard>
    );
  }
}

export default TransactionsReportPage;
