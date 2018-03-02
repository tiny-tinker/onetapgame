import React from 'react';
import BuyTicketBox from '../../components/BuyTicketBox';
import * as styles from './styles.module.css';

class DashboardRightbar extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <BuyTicketBox />
        <br />
        <BuyTicketBox />
        <br />
        <BuyTicketBox />
      </div>
    );
  }
}

export default DashboardRightbar;
