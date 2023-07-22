```javascript
import { SET_SCHEDULE, CLEAR_SCHEDULE } from '../actions/scheduling';

const initialState = {
  schedule: null,
};

const schedulingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCHEDULE:
      return {
        ...state,
        schedule: action.payload,
      };
    case CLEAR_SCHEDULE:
      return {
        ...state,
        schedule: null,
      };
    default:
      return state;
  }
};

export default schedulingReducer;
```

This code generates the reducer for scheduling in the file `frontend/src/reducers/scheduling.js`. It handles two actions: `SET_SCHEDULE` and `CLEAR_SCHEDULE`. The initial state of the scheduling reducer is an object with a `schedule` property set to `null`. The reducer updates the state based on the action type. When `SET_SCHEDULE` action is dispatched, it sets the `schedule` property to the payload value. When `CLEAR_SCHEDULE` action is dispatched, it sets the `schedule` property back to `null`. The reducer returns the updated state in each case.