import React from 'react';
import HomeLeftSidebar from '../../components/HomeLeftSidebar';
import HomeRightSidebar from '../../components/HomeRightSidebar';
import BuyTicketBox from '../../components/BuyTicketBox';
import TopLeaders from '../../components/TopLeaders';
import * as styles from './styles.module.css';

import mark from '../../assets/images/gameroom_mark.png';
import diceImg from '../../assets/images/gameroom_img.png';

class GameRoomPage extends React.Component {
  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div
            className={[
              'col-2 bkg-lightdarkblue h-100 pl-0 pr-0',
              styles.leftBar
            ].join(' ')}
          >
            <HomeLeftSidebar />
          </div>
          <div className="col-8 pt-3 position-relative">
            <div
              className={[
                'position-absolute w-100',
                styles.topLeadersContainer
              ].join(' ')}
            >
              <TopLeaders />
            </div>
            <div className={['row p-3', styles.container].join(' ')}>
              <div className={styles.gameroomContainer}>
                <div className={styles.markContainer}>
                  <img src={mark} role="presentation" />
                  <p className={styles.markLetter}>0/100</p>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <p className={styles.diceContainer}>
                      <img src={diceImg} role="presentation" />
                    </p>
                    <br />
                    <p className="text-center">
                      <a className={styles.btnJoin}>JOIN</a>
                      <a className={styles.btnLeave}>LEAVE</a>
                    </p>
                    <br />
                    <p className="text-center">
                      <a className={styles.btnLeave}>HOME</a>
                    </p>
                  </div>
                  <div className="col text-center" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={[
              'col-2 bkg-lightdarkblue pl-0 pr-0',
              styles.rightBar
            ].join(' ')}
          >
            <HomeRightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default GameRoomPage;
