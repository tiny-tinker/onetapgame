import React from 'react';
import * as styles from './chatboxItem.module.css';
import samplePhoto from '../../assets/images/meow.jpg';
const TableItem = function TableItemComponent() {
  return (
    <div className={['w-100', styles.chatItem].join(' ')}>
      <div className={styles.photoContainer}>
        <img className={styles.photo} src={samplePhoto} />
        <div className={styles.status} />
      </div>
      <div className={styles.chatText}>
        <p className="mb-0">I'm bad gambler</p>
      </div>
    </div>
  );
};

export default TableItem;
