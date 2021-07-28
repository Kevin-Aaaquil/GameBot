// Made With Love By Kevin and Shawshank

require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

let _db;

module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser:true, ignoreUndefined:true, useUnifiedTopology:true },
      function (err, MongoClient) {
        _db = MongoClient.db();
        return callback(err);
      },
    );
  },

  getDb: function () {
    if (!_db) {
      this.connectToServer();
    }
    return _db;
  },
};
