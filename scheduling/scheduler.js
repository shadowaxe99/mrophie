// scheduling/scheduler.js

const cron = require('node-cron');
const FileManager = require('../file_system/file_manager');

// Define the schedule for automatic sorting and data cleanup
cron.schedule('0 0 * * *', () => {
  // Call the sorting and data cleanup functions
  FileManager.sortFiles();
  FileManager.cleanupData();
});