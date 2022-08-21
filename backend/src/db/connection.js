import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import config from '../config.js';

const { DBNAME, REMOTE_URI } = constants
const connection = connect();

/* Connect to the database */
function connect() {
  console.log('Connecting to database...');
  let options = { keepAlive: 1, useNewUrlParser: true };
  mongoose.connect(config.REMOTE_URI, options);
  return mongoose.connection;
}


// const client = new MongoClient(REMOTE_URI, {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// });
mongoose.connect(REMOTE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let dbConnection;

export default {
  connectToServer: function (callback) {
    connection.on(
      'error', callback("Error connecting to DB... ")
    ).on(
      'disconnected', connect
    ).once(
      'open', callback
    );

    // client.connect((err, db) => {
    //   try {
    //     if (err || !db) {
    //       return callback(err);
    //     }
    //     dbConnection = db.db(DBNAME);
    //   } catch (err) {
    //     return callback(err);
    //   } finally {
    //     console.log('connected to MongoDB successfully.');
    //   }
    //   return callback();
    // });
  },

  getDb: function () {
    return dbConnection;
  },
};
