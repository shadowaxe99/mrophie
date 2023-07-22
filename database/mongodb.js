**File: database/mongodb.js**

```javascript
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/auto_sorter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Define schema for user configuration
const userConfigSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  sortingRules: {
    type: [String],
    default: [],
  },
  schedulingData: {
    type: Object,
    default: {},
  },
  voiceAssistantPreferences: {
    type: Object,
    default: {},
  },
});

// Create UserConfig model
const UserConfig = mongoose.model('UserConfig', userConfigSchema);

module.exports = UserConfig;
```

This code sets up the MongoDB connection and defines the schema for user configuration. It connects to the MongoDB database named "auto_sorter" and exports the UserConfig model, which represents the user configuration data stored in the database.