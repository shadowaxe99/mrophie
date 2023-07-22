```javascript
import { SET_SCHEDULE, CLEAR_SCHEDULE } from '../constants/scheduling';

export const setSchedule = (schedule) => {
  return {
    type: SET_SCHEDULE,
    payload: schedule,
  };
};

export const clearSchedule = () => {
  return {
    type: CLEAR_SCHEDULE,
  };
};
```