import React from 'react';
import MenuItem from './MenuItem';
import * as styles from './styles.module.css';
import profileImg from '../../assets/images/profile.png';

class DashboardLeftbar extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.img_container}>
          <img src={profileImg} />
          <p className={styles.name}>Tom Smith</p>
          <p className={styles.win}>Win:779</p>
        </p>
        <div className={styles.side_menu_container}>
          <div className={styles.side_menu}>
            <MenuItem
              image="total_spent.png"
              title="Total Spent"
              title2="$1500.0212"
              hasBorder={true}
            />
            <MenuItem
              image="game_won.png"
              title="Game won"
              title2="779"
              hasBorder={true}
            />
            <MenuItem
              image="total_earned.png"
              title="Total Earned"
              title2="$5932.0221"
              hasBorder={true}
            />
            <MenuItem image="my_profile.png" title="My Profile" />
            <MenuItem image="my_wallet.png" title="My Wallet" />
            <MenuItem image="deposit_fund.png" title="Deposit Fund" />
            <MenuItem image="withdraw_fund.png" title="Withdraw Fund" />
            <MenuItem
              image="transaction_report.png"
              title="Transaction Report"
            />
            <MenuItem image="support_ticket.png" title="Support Ticket" />
            <MenuItem image="affiliates.png" title="Affiliates" />
            <MenuItem image="settings.png" title="Settings" />
            <MenuItem image="logout.png" title="Logout" />
          </div>
        </div>
        <span className="fa fa-pencil-square-o" />
      </div>
    );
  }
}

export default DashboardLeftbar;
