import React from 'react';
import TableItem from './tableItem';
import * as styles from './styles.module.css';

class HomeLeftSidebar extends React.Component {
  render() {
    return (
      <div className="h-100">
        <div className={styles.sidebarSelectContainer}>
          <h3 className="color-yellow">History</h3>
          <div className="select">
            <select>
              <option selected disabled>
                Select a game typo
              </option>
              <option>Select History 1</option>
              <option>Select History 2</option>
              <option>Select History 3</option>
            </select>
            <div className="select_arrow" />
          </div>
        </div>
        <div className={styles.scrollBox}>
          <div className={styles.scroll_table_container}>
            <table className={styles.scroll_table}>
              <thead>
                <tr>
                  <th>Players/Team</th>
                  <th>Amount</th>
                  <th>%</th>
                  <th>data1</th>
                  <th>data2</th>
                  <th>data3</th>
                </tr>
              </thead>
              <tbody>
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeLeftSidebar;
