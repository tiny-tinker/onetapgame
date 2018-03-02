import React from 'react';
import DashboardLeftbar from '../../components/DashboardLeftbar';
import DashboardRightbar from '../../components/DashboardRightbar';
import * as styles from './styles.module.css';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className={styles.leftContainer}>
            <DashboardLeftbar />
          </div>
          <div className="col">{this.props.children}</div>
          <div className={styles.rightContainer}>
            <DashboardRightbar />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
