import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable';
import dashboardLeftBarReducer from './components/DashboardLeftbar/reducer'; /*
const routeReducer = (state = routeInitialState, action) => {
    switch (action.type) {
        /* istanbul ignore next */ /**
 * Creates the main reducer with the asynchronously loaded ones
 */

/*
        case LOCATION_CHANGE:
            return state.merge({ locationBeforeTransitions: action.payload });

        default:
            return state;
    }
};
*/ /*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
/*
const routeInitialState = fromJS({
    locationBeforeTransitions: null,
});
*/

/**
 * Merge route into the global application state
 */ const createReducer = asyncReducers =>
  combineReducers({
    route: routerReducer,
    form: formReducer,
    dashboardLeftBar: dashboardLeftBarReducer,
    ...asyncReducers
  });

export default createReducer;
