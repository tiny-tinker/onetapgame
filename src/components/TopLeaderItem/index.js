import React from 'react';
import PropTypes from 'prop-types';

import Hexagon from './../Hexagon';
import * as styles from './styles.module.css';

const TopLeaderItem = function TopLeaderItemComponent({ szNumber }) {
  let numberClass = styles.pos;
  if (szNumber === '1st') {
    numberClass = styles.first_pos;
  } else if (szNumber === '2nd') {
    numberClass = styles.second_pos;
  } else if (szNumber === '3rd') {
    numberClass = styles.third_pos;
  }
  return (
    <div className={styles.topleaderItem}>
      <Hexagon iSize={1} />
      <p className={numberClass}>{szNumber}</p>
    </div>
  );
};

TopLeaderItem.defaultProps = {
  szNumber: '1st'
};

TopLeaderItem.propTypes = {
  szNumber: PropTypes.string
};

export default TopLeaderItem;
