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

            randomRole(memberArray.length).then((resultArray)=>{
                memberArray.forEach((item,index)=>{
                    memberArray[index].send(resultArray[index])
                })
            })
        
    }
}