import mongoose from 'mongoose';
import config from '../config.js';

const connection = connect();

/* Connect to the database */
function connect() {
  console.log('Connecting to database...');
  let options = { useNewUrlParser: true, useUnifiedTopology: true };
  mongoose.connect(config.REMOTE_URI, options);
  return mongoose.connection;
}

let dbConnection;

export default {
  connectToServer: function (callback) {
    connection
      .on('error', () => callback('Error connecting to DB... '))
      .on('disconnected', connect)
      .once('open', callback);
  },

  //TODO: Define Database instance here
  getDb: function () {
    return dbConnection;
  },
};
