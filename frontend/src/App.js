frontend/src/App.js:
```javascript
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RuleConfiguration from './components/RuleConfiguration';
import DataCleanupSettings from './components/DataCleanupSettings';
import Scheduling from './components/Scheduling';
import VoiceAssistantInteraction from './components/VoiceAssistantInteraction';
import VisualRepresentation from './components/VisualRepresentation';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={RuleConfiguration} />
          <Route path="/data-cleanup" component={DataCleanupSettings} />
          <Route path="/scheduling" component={Scheduling} />
          <Route path="/voice-assistant" component={VoiceAssistantInteraction} />
          <Route path="/visual-representation" component={VisualRepresentation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```