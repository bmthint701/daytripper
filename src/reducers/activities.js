import {
  SEARCH_ACTIVITIES_SUCCESS,
  SEARCH_ACTIVITIES_FAIL
} from "../actions/activities";

const initState = {
	activities: []
};

export function activities(state = initState, action) {
  switch (action.type) {
    case SEARCH_ACTIVITIES_SUCCESS:
      return Object.assign({}, state, {
        activities: action.activities
      });
    default:
      return state;
  }
}