import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable'; /*
        case LOCATION_CHANGE:
            return state.merge({ locationBeforeTransitions: action.payload });

        default:
            return state;
    }
};
*/ /*
const routeReducer = (state = routeInitialState, action) => {
    switch (action.type) {
        /* istanbul ignore next */

/*
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
 */ /**
 * Creates the main reducer with the asynchronously loaded ones
 */
const createReducer = asyncReducers =>
  combineReducers({
    route: routerReducer,
    form: formReducer,
    ...asyncReducers
  });

export default createReducer;
