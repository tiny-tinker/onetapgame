import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as styles from './menuitem.module.css';

const MenuItem = function MenuItemComponent({
  image,
  title,
  title2,
  hasBorder,
  active,
  url,
  activeLink,
  menuClick,
  id
}) {
  let imgSrc;
  imgSrc = require(`./../../assets/images/${image}`);
  let containerClass;
  if (hasBorder === true) {
    containerClass = ['d-block w-100', styles.container, styles.border];
  } else {
    containerClass = ['d-block w-100', styles.container];
  }

  if (activeLink == false) {
    containerClass.push('disabled-link');
  } else {
    containerClass.push(styles.menu_item);
  }
  containerClass = containerClass.join(' ');

  let titleClass;
  if (active === true) {
    titleClass = [styles.title, styles.active].join(' ');
  } else {
    titleClass = styles.title;
  }
  return (
    <Link onClick={() => menuClick(id)} className={containerClass} to={url}>
      <img src={imgSrc} className={styles.icon} />
      <p className={titleClass}>{title}</p>
      <div className={styles.title2}>{title2}</div>
    </Link>
  );
};

MenuItem.defaultProps = {
  image: 'total_spent.png',
  title: 'Total spent',
  title2: '',
  hasBorder: false,
  active: false,
  url: '/deposit',
  activeLink: false,
  menuClick: null,
  id: -1
};

MenuItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  title2: PropTypes.string,
  hasBorder: PropTypes.boolean,
  active: PropTypes.boolean,
  url: PropTypes.string,
  activeLink: PropTypes.boolean,
  menuClick: PropTypes.func,
  id: PropTypes.integer
};

export default MenuItem;
