import axios from "axios";

export const SEARCH_ACTIVITIES_SUCCESS = "SEARCH_ACTIVITIES_SUCCESS";
export const SEARCH_ACTIVITIES_FAIL = "SEARCH_ACTIVITIES_FAIL";


function searchActivitiesSuccess(activities) {
  return {
    type: SEARCH_ACTIVITIES_SUCCESS,
    activities
  };
}

function searchActivitiesFail() {
  return {
    type: SEARCH_ACTIVITIES_FAIL
  };
}



export function searchActivities(query, location) {
  return (dispatch, getState) => {
    axios
      .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}%20near%20${location}&key=AIzaSyDXlfj6hb4OJI1WozHCIMFHrAGL2rn9qlA`, {
        headers: {
          Authorization: getState().auth.authHash
        }
      })
      .then(response => {
        dispatch(searchActivitiesSuccess(response.data));
      })
      .catch(error => {
        dispatch(searchActivitiesFail());
      });
  };
}

