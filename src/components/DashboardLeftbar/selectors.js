import { createSelector } from 'reselect';

const selectDashboardLeft = state => state.get('dashboardLeftBar');
const makeMenuItems = () =>
  createSelector(selectDashboardLeft, state =>
    state.get('dashboard_menu_items').toJS()
  );

const activeItem = state =>
  state
    .get('dashboardLeftBar')
    .get('dashboard_menu_items')
    .toJS()
    .find(item => item.id == state.get('dashboardLeftBar').get('active'));

const makeActiveItem = () => createSelector(activeItem, state => [state]);
export { selectDashboardLeft, makeMenuItems, makeActiveItem };
