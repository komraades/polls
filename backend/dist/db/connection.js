"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const constants_1 = __importDefault(require("../constants"));
const { DBNAME, URI } = constants_1.default;
const connectionString = URI;
const client = new mongodb_1.MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
let dbConnection;
exports.default = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
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
//# sourceMappingURL=connection.js.map