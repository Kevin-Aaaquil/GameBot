const Discord = require("discord.js")

const randomRole =async (num)=>{
const arr = [];
const num1 = await Math.floor(Math.random() * num);
let num2, c= true;
while(c){
    num2 = await Math.floor(Math.random() * num);
    if(num2 != num1)
    c = false;
}
for(i=0;i<num;i++){
    if(i===num1){
        arr.push("murderer");
    }
    else if(i===num2){
        arr.push("detective");
    }
    else{
        arr.push("human")
    }
}
return arr
}

const rules = "``` Rules of the Game : \n 1) All members with the role \"player\" will receive a private message which will have their role. \n 2) THIS IS A LONG RUNNING GAME. \n 3) After the roles are assigned the game will last till either the detective catches the murderer or the murderer kills all the humans in the game. \n 4) The objective of the muderer is to kill as many humans as possible and the role of the detective is to catch the murderer before all humans die \n 5) The muderer has to kill the human by saying the human's name followed by the phrase \" You have been murdered \", the detective can say this anywhere they want in private or in front of other humans. \n 6) Once the human is dead, the human has to notify the group that they have been killed. \n 7) Bekar ka jhoot bolke game aur bakio ka mood mat kharab karna please, Those who do that are the biggest dicks in the world and deserve to be in the 9th circle of hell  \n```"



module.exports={
    name:"murder",
    description:"send unique pm to each member",
    execute(message,ID,args){
        if(!(message.guild.roles.cache.find(role=> role.name === "player")))
        {
            message.channel.send("\"player\" role is missing")
            return 0;
        }
        const memberArray = [];
        message.guild.roles.cache.find(role => role.name ==="player").members.map(m=>{
            if(m.id != ID && !m.user.bot){
                memberArray.push(m)
            }
        })
        
        if(memberArray.length === 0)
        {
            message.channel.send("\"player\" role is not assigned to any member")
            return 0;
        }
        
        if(memberArray.length < 3){
            message.channel.send("minimum three [3] players required")
            return 0;
        }
        
            message.channel.send(rules)
            randomRole(memberArray.length).then((resultArray)=>{
                memberArray.forEach((item,index)=>{
                    const mssg = `Your role is ${resultArray[index]} \n Please enter the command \`+game murder-help\` to view the rules of the game again \n`
                    memberArray[index].send(mssg.toString())
                })
            })
        
    }
}