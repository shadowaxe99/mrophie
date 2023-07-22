frontend/src/reducers/voiceAssistant.js:
```javascript
import { SET_VOICE_COMMAND, CLEAR_VOICE_COMMAND } from '../actions/voiceAssistant';

const initialState = {
  voiceCommand: '',
};

const voiceAssistantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VOICE_COMMAND:
      return {
        ...state,
        voiceCommand: action.payload,
      };
    case CLEAR_VOICE_COMMAND:
      return {
        ...state,
        voiceCommand: '',
      };
    default:
      return state;
  }
};

export default voiceAssistantReducer;
```

