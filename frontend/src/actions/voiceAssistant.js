frontend/src/actions/voiceAssistant.js:
```javascript
import { WHISPER_API_KEY } from '../constants';

// Action Types
export const SET_VOICE_COMMAND = 'SET_VOICE_COMMAND';
export const PROCESS_VOICE_COMMAND = 'PROCESS_VOICE_COMMAND';
export const PROCESS_VOICE_COMMAND_SUCCESS = 'PROCESS_VOICE_COMMAND_SUCCESS';
export const PROCESS_VOICE_COMMAND_FAILURE = 'PROCESS_VOICE_COMMAND_FAILURE';

// Action Creators
export const setVoiceCommand = (command) => {
  return {
    type: SET_VOICE_COMMAND,
    payload: command,
  };
};

export const processVoiceCommand = (command) => {
  return async (dispatch) => {
    dispatch({ type: PROCESS_VOICE_COMMAND });

    try {
      const response = await fetch('https://whisper-api.com/commands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${WHISPER_API_KEY}`,
        },
        body: JSON.stringify({ command }),
      });

      if (!response.ok) {
        throw new Error('Failed to process voice command');
      }

      const data = await response.json();

      dispatch({
        type: PROCESS_VOICE_COMMAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PROCESS_VOICE_COMMAND_FAILURE,
        payload: error.message,
      });
    }
  };
};
```
