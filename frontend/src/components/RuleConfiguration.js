frontend/src/components/RuleConfiguration.js:
```javascript
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRule } from '../actions/rules';

const RuleConfiguration = () => {
  const rules = useSelector((state) => state.rules);
  const dispatch = useDispatch();

  const [newRule, setNewRule] = useState('');

  const handleRuleChange = (e) => {
    setNewRule(e.target.value);
  };

  const handleAddRule = () => {
    dispatch(updateRule(newRule));
    setNewRule('');
  };

  return (
    <div>
      <h2>Rule Configuration</h2>
      <ul>
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
      <input type="text" value={newRule} onChange={handleRuleChange} />
      <button onClick={handleAddRule}>Add Rule</button>
    </div>
  );
};

export default RuleConfiguration;
```