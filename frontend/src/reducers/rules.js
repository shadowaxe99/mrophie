```javascript
import { ADD_RULE, DELETE_RULE, UPDATE_RULE } from '../actions/rules';

const initialState = {
  rules: [],
};

const rulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RULE:
      return {
        ...state,
        rules: [...state.rules, action.payload],
      };
    case DELETE_RULE:
      return {
        ...state,
        rules: state.rules.filter(rule => rule.id !== action.payload),
      };
    case UPDATE_RULE:
      return {
        ...state,
        rules: state.rules.map(rule =>
          rule.id === action.payload.id ? action.payload : rule
        ),
      };
    default:
      return state;
  }
};

export default rulesReducer;
```
