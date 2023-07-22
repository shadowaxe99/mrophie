frontend/src/components/DataCleanupSettings.js:

```javascript
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateDataCleanupSettings } from '../actions/rules';

const DataCleanupSettings = () => {
  const dataCleanupSettings = useSelector((state) => state.rules.dataCleanupSettings);
  const dispatch = useDispatch();
  const [cleanupInterval, setCleanupInterval] = useState(dataCleanupSettings.cleanupInterval);

  const handleCleanupIntervalChange = (e) => {
    setCleanupInterval(e.target.value);
  };

  const handleSaveSettings = () => {
    dispatch(updateDataCleanupSettings({ cleanupInterval }));
  };

  return (
    <div>
      <h2>Data Cleanup Settings</h2>
      <label htmlFor="cleanupInterval">Cleanup Interval:</label>
      <input
        type="text"
        id="cleanupInterval"
        value={cleanupInterval}
        onChange={handleCleanupIntervalChange}
      />
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default DataCleanupSettings;
```

This code generates the `DataCleanupSettings` component, which allows users to configure the data cleanup settings for the Auto Sorter. It retrieves the current data cleanup settings from the Redux store using the `useSelector` hook and updates the cleanup interval value using the `useState` hook. The `handleCleanupIntervalChange` function is triggered when the user changes the cleanup interval input, updating the `cleanupInterval` state. The `handleSaveSettings` function dispatches the `updateDataCleanupSettings` action to update the data cleanup settings in the Redux store. The component renders a form with an input field for the cleanup interval and a button to save the settings.