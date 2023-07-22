frontend/src/components/Scheduling.js:
```javascript
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSchedule } from '../actions/scheduling';

const Scheduling = () => {
  const dispatch = useDispatch();
  const schedule = useSelector((state) => state.scheduling.schedule);
  const [interval, setInterval] = useState(schedule.interval);
  const [specificTime, setSpecificTime] = useState(schedule.specificTime);

  const handleIntervalChange = (e) => {
    setInterval(e.target.value);
  };

  const handleSpecificTimeChange = (e) => {
    setSpecificTime(e.target.value);
  };

  const handleSave = () => {
    dispatch(setSchedule({ interval, specificTime }));
  };

  return (
    <div>
      <h2>Scheduling</h2>
      <div>
        <label>Interval:</label>
        <input type="text" value={interval} onChange={handleIntervalChange} />
      </div>
      <div>
        <label>Specific Time:</label>
        <input type="text" value={specificTime} onChange={handleSpecificTimeChange} />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Scheduling;
```