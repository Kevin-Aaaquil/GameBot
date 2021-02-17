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
		'What is your name(You name will be used to store and verify the entries)? ',
		(name) => {
			try {
				// await db.collection('truth').insertOne({ enter: 'hello there' });

				function process() {
					r.question(
						'Enter [1] if you want to add a truth question, [2] for dare and [e] to exit  ',
						(choice) => {
							if (choice === 'e') {
								exit();
							}
							if (choice == 1 || choice == 2) {
								r.question(
									'Enter the statement you wish to add to the database      ',
									(statement) => {
										if (choice == 1) {
											async function addtruth() {
												let count = await db
													.collection('truth')
													.countDocuments();
												await db
													.collection('truth')
													.insertOne({
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
												let count = await db
													.collection('dare')
													.countDocuments();
												await db
													.collection('dare')
													.insertOne({
														name: name,
														index: count,
														statement: statement,
													});
												console.log(
													'Added the dare statement to DB'
												);
												process();
											}
											addare();
										}
									}
								);
							}
						}
					);
				}
				process();
			} catch (error) {
				console.log('error');
			}
		}
	);
}
function exit() {
	r.close();
	client.close();
}
test().then(() => {
	add();
});
