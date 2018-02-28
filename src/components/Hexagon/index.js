import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.css';

const Hexagon = function HexagonComponent({ iSize }) {
  let hexagon;
  let hexTop;
  let hexBottom;
  if (iSize == 0) {
    hexagon = styles.hexagon;
    hexTop = styles.hexTop;
    hexBottom = styles.hexBottom;
  } else {
    hexagon = styles.hexagonBig;
    hexTop = styles.hexTopBig;
    hexBottom = styles.hexBottomBig;
  }
  return (
    <div className={hexagon}>
      <div className={hexTop} />
      <div className={hexBottom} />
    </div>
  );
};

/*
  size: 0 normal 1: big
 */
Hexagon.defaultProps = {
  iSize: 0
};

Hexagon.propTypes = {
  iSize: PropTypes.number
};

export default Hexagon;
