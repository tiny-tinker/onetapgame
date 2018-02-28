import React from 'react';
import HomeLeftSidebar from '../../components/HomeLeftSidebar';
import HomeRightSidebar from '../../components/HomeRightSidebar';
import BuyTicketBox from '../../components/BuyTicketBox';
import TopLeaders from '../../components/TopLeaders';
import * as styles from './styles.module.css';
class Home extends React.Component {
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
          <div className="col pt-3">
            <div
              className={[
                'position-absolute w-100',
                styles.topLeadersContainer
              ].join(' ')}
            >
              <TopLeaders />
            </div>
            <div
              className={[
                'bkg-lightdarkblue h-100',
                styles.ticketBoxContainer
              ].join(' ')}
            >
              <div className="m-3">
                <BuyTicketBox />
              </div>
              <div className="m-3">
                <BuyTicketBox />
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

export default Home;
