import { fromJS } from 'immutable';
import { DASHBOARD_MENU_SELECTED } from './constants';

const initialState = fromJS({
  dashboard_menu_items: [
    {
      id: '1',
      image: 'my_profile.png',
      image_active: 'my_profile_active.png',
      url: '/profile',
      title: 'My Profile'
    },
    {
      id: '2',
      image: 'my_wallet.png',
      image_active: 'my_wallet_active.png',
      url: '/wallet',
      title: 'My Wallet'
    },
    {
      id: '3',
      image: 'deposit_fund.png',
      image_active: 'deposit_fund_active.png',
      url: '/deposit',
      title: 'Deposit Fund'
    },
    {
      id: '4',
      image: 'withdraw_fund.png',
      image_active: 'withdraw_fund_active.png',
      url: '/withdraw',
      title: 'Withdraw Fund'
    },
    {
      id: '5',
      image: 'transaction_report.png',
      image_active: 'transaction_report_active.png',
      url: '/report',
      title: 'Transaction Report'
    },
    {
      id: '6',
      image: 'support_ticket.png',
      image_active: 'support_ticket_active.png',
      url: '/ticket',
      title: 'Support Ticket'
    },
    {
      id: '7',
      image: 'affiliates.png',
      image_active: 'affiliates_active.png',
      url: '/affiliate',
      title: 'Affiliates'
    },
    {
      id: '8',
      image: 'settings.png',
      image_active: 'settings_active.png',
      url: '/settings',
      title: 'Settings'
    }
  ],
  active: 1
});

export default function dashboardLeftBarReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_MENU_SELECTED:
      return state.set('active', action.payload);
    default:
      return state;
  }
}
