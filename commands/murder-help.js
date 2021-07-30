module.exports = {
    name : "murder-help",
    description : "this sends the rules of the game in the main server",
    execute(message,args){
        const rules = "``` Rules of the Game : \n 1) All members with the role \"player\" will receive a private message which will have their role. \n 2) THIS IS A LONG RUNNING GAME. \n 3) After the roles are assigned the game will last till either the detective catches the murderer or the murderer kills all the humans in the game. \n 4) The objective of the muderer is to kill as many humans as possible and the role of the detective is to catch the murderer before all humans die \n 5) The muderer has to kill the human by saying the human's name followed by the phrase \" You have been murdered \", the detective can say this anywhere they want in private or in front of other humans. \n 6) Once the human is dead, the human has to notify the group that they have been killed. \n 7) Bekar ka jhoot bolke game aur bakio ka mood mat kharab karna please, Those who do that are the biggest dicks in the world and deserve to be in the 9th circle of hell  \n```"
        message.channel.send(rules);
    }
}