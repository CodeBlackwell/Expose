import { FETCH_PROFILES } from '../constants/appconstants'

const initialState = {
    profiles: []
};

const actionHandlers = {
    [FETCH_PROFILES] (state, action) {
        const {
            payload: {
                data: profile
            }
        }  = action;

        return Object.assign({}, state, {
            profile
        });
    }
};


// Setting up the reducer this way is an optimization for constant time lookup on action handlers
const appReducer = function (state = initialState, action) {
    if (actionHandlers[action.type] != null) {
        return actionHandlers[action.type] (state, action)
    }
    return state
};
export default appReducer