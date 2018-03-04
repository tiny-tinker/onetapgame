import React from 'react';
import Dashboard from '../../components/Dashboard';
import * as styles from './styles.module.css';

class SupportTicketPage extends React.Component {
  render() {
    return (
      <Dashboard>
        <div className={styles.container}>
          <p className={styles.title}>
            <b>Support Ticket</b>
          </p>
          <hr className={['mb-0', styles.divider].join(' ')} />
          <div className="row h-100">
            <div
              className={['col h-100 pt-3', styles.verticalDivider].join(' ')}
            >
              <div className={styles.inputFormContainer}>
                <input placeholder="Your Name:" />
              </div>
              <div className={styles.inputFormContainer}>
                <input placeholder="Your Email:" />
              </div>
              <div className={styles.inputFormContainer}>
                <input placeholder="Subject" />
              </div>
              <div className={styles.textAreaFormContainer}>
                <textarea rows="6" placeholder="Your Message" />
              </div>
              <br />
              <a className={styles.btnYellow}>Create Support Ticket</a>
            </div>
            <div className="col pt-1 h-100">
              <br />
              <p className="mb-1">
                <b>Recent Ticket Status</b>
              </p>
              <hr className={['mt-0', styles.subDivider].join(' ')} />
              <div className="row">
                <div className="col">
                  <p className="mb-1">Ticket</p>
                </div>
                <div className="col">
                  <p className="mb-1">Status</p>
                </div>
              </div>
              <hr className={['mt-0', styles.subDivider].join(' ')} />
              <div className="row">
                <div className="col">
                  <p className="mb-1">I didn't get the payment</p>
                </div>

                <div className="col">
                  <p className="mb-1">
                    <span className={styles.colorOrange}>
                      Pending &nbsp;&nbsp;
                    </span>
                    <i className="fa fa-chevron-right" />{' '}
                  </p>
                </div>
              </div>
              <hr className={['mt-0', styles.subDivider].join(' ')} />
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default SupportTicketPage;
