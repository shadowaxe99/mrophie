// file_system/file_manager.js

const fs = require('fs');

// Function to check if a file exists
const fileExists = (filePath) => {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

// Function to create a directory
const createDirectory = (directoryPath) => {
  fs.mkdirSync(directoryPath, { recursive: true });
};

// Function to move a file to a new location
const moveFile = (sourcePath, destinationPath) => {
  fs.renameSync(sourcePath, destinationPath);
};

// Function to delete a file
const deleteFile = (filePath) => {
  fs.unlinkSync(filePath);
};

module.exports = {
  fileExists,
  createDirectory,
  moveFile,
  deleteFile,
};