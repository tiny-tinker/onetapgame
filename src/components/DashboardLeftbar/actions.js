import { DASHBOARD_MENU_SELECTED } from './constants';

export const selectMenu = item => {
  return {
    type: DASHBOARD_MENU_SELECTED,
    payload: item
  };
};
