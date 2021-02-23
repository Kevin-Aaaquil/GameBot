const db = require('./data');
let dbcheck = db.getDb();

dbcheck.collection('truth').countDocuments();
