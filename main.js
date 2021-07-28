// Made With Love By Kevin and Shawshank

const discord = require('discord.js');
require('dotenv').config()
const data = require('./data');
const db = require('./data');
const fs = require('fs');
const client = new discord.Client();
client.commands = new discord.Collection();
client.once('ready', err => {
  console.log('\x1b[32m', '\x1b[5m', '..................DISCORD CONNECTED!');
});
db.connectToServer(function (err) {
  if (err) console.log(err);
  console.log('\x1b[32m', '\x1b[5m', '................DATABASE CONNECTED');

  const prefix = process.env.prefix; //comment start

  const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
  } //comment end
  const cooldown = new Set();
  client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (cooldown.has(message.author.name)) {
      client.commands.get('cooldown').execute(message, args);
      message.channel.send(`<@${message.author.id}>`);
    } else {
      cooldown.add(message.author.name);
      setTimeout(() => {
        cooldown.delete(message.author.name);
      }, 4000);
      if (command === 'help') {
        //Help

        client.commands.get('help').execute(message, args);
      } else if (command === 'truth' || command === 't') {
        //Truth

        client.commands.get('truth').execute(message, args);
      } else if (command === 'dare' || command === 'd') {
        //Dare

        client.commands.get('dare').execute(message, args);
      }
      else if(command === "murder"){
       client.commands.get('murder').execute(message,client.user.id,args);
      }
    }
  });

  client.login(process.env.token);
});
