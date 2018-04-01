import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';

import { FETCH_PROFILES, KEY as APPLICATION_KEY } from '../constants/appconstants'

const initialState = {
    profiles: []
};

const appReducer = createReducer(fromJS(initialState), {
    [FETCH_PROFILES] (state, action) {

        const profiles  = action.payload.data;
        return state.setIn([APPLICATION_KEY, 'profiles'], profiles);
    }
});

export default appReducer