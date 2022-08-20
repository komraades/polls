import { MongoClient } from 'mongodb';
import constants from "../constants"

const {DBNAME, URI } = constants
const connectionString = URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection:any;

export default {
  connectToServer: function (callback: any) {
    client.connect(function (err:Error, db:any) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db(DBNAME);
      console.log('connected to MongoDB successfully.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
