import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuItem from './MenuItem';
import * as styles from './styles.module.css';
import profileImg from '../../assets/images/profile.png';
import * as actions from './actions';
import { makeMenuItems, makeActiveItem } from './selectors';

class DashboardLeftbar extends React.Component {
  static createMenuItems(menu_items, activeItem, menuClick) {
    return menu_items.map(function(item) {
      if (item.id == activeItem[0].id)
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            menuClick={menuClick}
            image={item.image_active}
            url={item.url}
            active={true}
            activeLink={true}
          />
        );
      else
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            menuClick={menuClick}
            image={item.image}
            url={item.url}
            active={false}
            activeLink={true}
          />
        );
    });
  }
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.img_container}>
          <img src={profileImg} />
          <p className={styles.name}>Tom Smith</p>
          <p className={styles.win}>Win:779</p>
        </p>
        <div className={styles.side_menu_container}>
          <div className={styles.side_menu}>
            <MenuItem
              image="total_spent.png"
              title="Total Spent"
              title2="$1500.0212"
              hasBorder={true}
            />
            <MenuItem
              image="game_won.png"
              title="Game won"
              title2="779"
              hasBorder={true}
            />
            <MenuItem
              image="total_earned.png"
              title="Total Earned"
              title2="$5932.0221"
              hasBorder={true}
            />
            {DashboardLeftbar.createMenuItems(
              this.props.menu_items,
              this.props.activeItem,
              this.props.menuClick
            )}
            <MenuItem image="logout.png" title="Logout" />
          </div>
          <span className={['fa fa-pencil-square-o', styles.edit].join(' ')} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  menu_items: makeMenuItems(),
  activeItem: makeActiveItem()
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      ...ownProps.actions,
      ...bindActionCreators({ ...actions }, dispatch)
    },
    menuClick(item) {
      dispatch(actions.selectMenu(item));
    }
  };
}

//export default DashboardLeftbar;
export default connect(mapStateToProps, mapDispatchToProps)(DashboardLeftbar);
