// Made With Love By Kevin and Shawshank

const MongoClient = require('mongodb').MongoClient;
require('dotenv').config(); //reads .env file
const readline = require('readline');

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ignoreUndefined: true,
});
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let db;

async function test() {
  await client.connect();
  console.log('                   DATABASE CONNECTED!');
  db = client.db();
}
async function add() {
  r.question(
    'What is your name(You name will be used to store and verify the entries? Enter [view] instead of your name to view the entire truth and dare list  ',
    name => {
      if (name === 'view') {
        view();
      } else {
        try {
          // await db.collection('truth').insertOne({ enter: 'hello there' });

          function process() {
            r.question('Enter [1] if you want to add a truth question, [2] for dare and [e] to exit  ', choice => {
              if (choice === 'e') {
                exit();
              }
              if (choice == 1 || choice == 2) {
                r.question('Enter the statement you wish to add to the database      ', statement => {
                  if (choice == 1) {
                    async function addtruth() {
                      let count = await db.collection('truth').countDocuments();
                      await db.collection('truth').insertOne({
                        name: name,
                        index: count,
                        statement: statement,
                      });
                      console.log(' Added the truth');
                      process();
                    }

                    addtruth();
                  } else if (choice == 2) {
                    async function addare() {
                      let count = await db.collection('dare').countDocuments();
                      await db.collection('dare').insertOne({
                        name: name,
                        index: count,
                        statement: statement,
                      });
                      console.log('Added the dare statement to DB');
                      process();
                    }
                    addare();
                  }
                });
              }
            });
          }
          process();
        } catch (error) {
          console.log('error');
        }
      }
    },
  );
}
function exit() {
  r.close();
  client.close();
}

async function view() {
  console.log('working on this...........');
  let truth = await db.collection('truth').find({}).toArray();
  console.log('            TRUTH :                ');
  for (let i = 0; i < truth.length; i++) {
    console.log();
    console.log(truth[i]);
  }
  let dare = await db.collection('dare').find({}).toArray();
  console.log('            DARE :                ');

  for (let i = 0; i < dare.length; i++) {
    console.log();
    console.log(dare[i]);
  }
  exit();
}
test().then(() => {
  add();
});
