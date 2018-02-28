import React from 'react';
import TableItem from './chatboxItem';
import * as styles from './styles.module.css';

const HomeRightSidebar = function HomeRightSidebarComponent() {
  return (
    <div className="h-100">
      <div className={styles.chatBoxContainer}>
        <div className={styles.chatBox}>
          <div className={styles.statusBox}>
            <div className="w-100 p-1">
              <span
                className={[
                  'rounded-circle fa fa-circle color-green',
                  styles.status
                ].join(' ')}
              />
              <p
                className={[
                  'color-lighgrey mb-0 p-1 d-inline-block',
                  styles.status_info
                ].join(' ')}
              >
                <span className="ml-1">799 People</span>
                <span className="color-green"> &nbsp;Online</span>
              </p>
            </div>
            <button className={styles.statusButton}>
              <span className="fa fa-chevron-right" />
            </button>
          </div>
          <div className={styles.chatBoxItems}>
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
          </div>
        </div>
      </div>
      <div className={styles.inputBoxContainer}>
        <textarea rows="3" cols="50" />
        <div className={styles.buttonContainer}>
          <button className={styles.sendBtn}>
            <b>Send</b>
          </button>
          <button className={styles.emojiBtn}>
            <span className="fa fa-smile-o" />
            <div className={styles.select_arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeRightSidebar;
