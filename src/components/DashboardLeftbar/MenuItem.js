import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './menuitem.module.css';

const MenuItem = function MenuItemComponent({
  image,
  title,
  title2,
  hasBorder,
  active
}) {
  let imgSrc;
  imgSrc = require(`./../../assets/images/${image}`);
  let containerClass;
  if (hasBorder === true) {
    containerClass = [styles.container, styles.border].join(' ');
  } else {
    containerClass = styles.container;
  }
  let titleClass;
  if (active === true) {
    titleClass = [styles.title, styles.active].join(' ');
  } else {
    titleClass = styles.title;
  }
  return (
    <div className={containerClass}>
      <img src={imgSrc} className={styles.icon} />
      <p className={titleClass}>{title}</p>
      <div className={styles.title2}>{title2}</div>
    </div>
  );
};

MenuItem.defaultProps = {
  image: 'total_spent.png',
  title: 'Total spent',
  title2: '',
  hasBorder: false,
  active: false
};

MenuItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  title2: PropTypes.string,
  hasBorder: PropTypes.boolean,
  active: PropTypes.boolean
};

export default MenuItem;
