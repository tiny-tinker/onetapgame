import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.css';
import dice from '../../assets/images/dice.png';
import ticket from '../../assets/images/ticket.png';
import chart from '../../assets/images/chart.png';
import clock from '../../assets/images/clock.png';

const BuyTicketBox = function BuyTicketBox() {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col text-center pl-4 pr-4">
          <p className={styles.dice_container}>
            <img src={dice} role="presentation" />
          </p>
          <h4 className="text-white text-center">0/10</h4>
          <p className={styles.rolldice}>Roll the dice</p>
          <button className={styles.buyTicket}>Buy Ticket</button>
        </div>
        <div className="col text-center pt-3">
          <p className="text-center color-whitegrey">
            <img className={styles.ticket} src={ticket} />
            &nbsp;&nbsp;Tickets sold: &nbsp;&nbsp; 6
          </p>
          <p className="text-center">
            <img className={styles.chart} src={chart} />
          </p>
          <p className="text-center color-whitegrey mb-0">
            <img className={styles.clock} src={clock} />
            &nbsp;00:01:23
          </p>
          <p className={['text-right', styles.remaining].join(' ')}>
            Remaining to start
          </p>
        </div>
        <div className={styles.divider} />
      </div>
      <span className={['fa .fa-info-circle', styles.info].join(' ')} />
    </div>
  );
};

export default BuyTicketBox;
