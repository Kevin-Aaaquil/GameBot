const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const readline = require('readline');
//process.env.MONGODB_URL
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
	// await db.collection('truth').insertOne({ enter: 'hello there' });
	try {
		r.question(
			'Enter 1 if you want to add a truth question and 2 for dare',
			(choice) => {
				r.question(
					'Enter the statement you wish to add to the database',
					(statement) => {
						if (choice == 1) {
							async function addtruth() {
								let count = await db
									.collection('truth')
									.countDocuments();
								await db
									.collection('truth')
									.insertOne({
										index: count,
										statement: statement,
									});
							}
							addtruth();
						} else if (choice == 2) {
							async function adddare() {
								let count = await db
									.collection('dare')
									.countDocuments();
								await db
									.collection('dare')
									.insertone({
										index: count,
										statement: statement,
									});
							}
						}
					}
				);
			}
		);
	} catch (error) {
		console.log('error');
	}
}

test().then(() => {
	add();
});
