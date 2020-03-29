require('dotenv').config();
const discord = require('discord.js');
const { MessageEmbed } = require("discord.js")
const config = require("./config.json")
let coins = require("./coins.json");
let xp = require("./xp.json");
const fs = require("fs");
const client = new discord.Client({ partials: ['MESSAGE', 'REACTION']});





const { registerCommands, registerEvents } = require('./utils/registry');
(async () => {
    client.login(process.env.BOT_TOKEN);
    client.commands = new Map();
    client.cachedMessageReactions = new Map();
    await registerEvents(client, '../events');
    await registerCommands(client, '../commands');
    const ecolor = config.embed_color

})();


  

client.on('guildMemberAdd', member => {
    let memberavatar = member.user.avatarURL
    let embed = new MessageEmbed()
    .setDescription(' **' + member.user.username + '\n ** Welcome to Destiny Cluster™ PS4&PC**\n\n 🌟 **Ark | Official Discord | ! Enjoy your stay.** 🌟 ' )
    .setColor('RANDOM')
    .setThumbnail(member.user.avatarURL()) 
    .addField('-', `${member}  **:bookmark_tabs: Use !help (If you want know all commands)**\n\n**Please check all the channels to see everything you need.**\n\n__***:credit_card: To donate / report an admin please contact ${member.guild.owner}  :star2:***__\n\n**For any other questions check the channels**\n\n **For shop / help on server contact an admin**    `)
    .addField(':family_mwgb: | Actually there is ', `${member.guild.memberCount} Members Online!`)
    .addField("Name", `<@` + `${member.id}` + `>`, true)
    .addField('Server', `${member.guild.name}`, true )
    .setFooter(`📥 ${member.guild.name} Official Discord!`)
    .setTimestamp()
    
    member.guild.channels.cache.get('684696376390451236').send(embed)
})

client.on('guildMemberRemove', member =>{
    let embed = new MessageEmbed()
        .setDescription(':cry: **' + member.user.username + '** left ' + member.guild.name)
        .setThumbnail(member.user.avatarURL()) 
        .addField(' | We are Now: ', `${member.guild.memberCount} Members!`)

        .setFooter(`📥 ${member.guild.name} Official Discord!`)
        member.guild.channels.cache.get('692274936961826877').send(embed)

})
client.on('ready' , ()=> {
    const guild = client.guilds.cache.get("684672013868335134");
    setInterval(function () {
       var memberCount = guild.members.cache.filter(member => !member.user.bot).size;  
       var memberCountChannel = client.channels.cache.get("692101208390762496");
       memberCountChannel.setName(`⭐🌈Survivors  ${memberCount} `);
    }, 1000);
  
  });

  client.on('guildMemberAdd', member =>  {
    const guild = client.guilds.cache.get("684672013868335134");
    setInterval(function () {
       var memberCount = guild.members.filter(member => !member.user.bot).size;  
       var memberCountChannel = client.channels.cache.get("692101208390762496");
       memberCountChannel.setName(`⭐🌈Survivors  ${memberCount} `);
    }, 1000);
  });
  client.on('guildMemberRemove', member =>  {
    const guild = client.guilds.cache.get("684672013868335134");
    setInterval(function () {
       var memberCount = guild.members.filter(member => !member.user.bot).size;  
       var memberCountChannel = client.channels.cache.get("692101208390762496");
       memberCountChannel.setName(`⭐🌈Survivors  ${memberCount} `);
    }, 1000);
  });

  client.on('message', message => {
    let PREFIX = "!";
    if (message.content.split(' ')[0] == '/b')
    message.guild.members.forEach( member => {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));

message.delete();

});

});


client.on('message', message => {
  let PREFIX = "!";
if(message.content.startsWith(`${PREFIX}devmass`)) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;


let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.cache.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`${argresult}\n ${m}`);

})


if (!args[1]) {


  const embed = new MessageEmbed()
.setDescription(":white_check_mark:   |   Successfully Sent the Message to all Server Members.")

.setColor("#00ff33")
.setTitle ('Message Has been Sent.')
.setFooter ("BOT DEVELOPER : skypro👑#6437 | DESTINY OWNER")
.setImage('http://bit.ly/36Ske5f');
message.channel.send(embed);

} else {

  const embed = new MessageEmbed()
                .setDescription(':white_check_mark: | Message has been Successfully Sent to @everyone xD')
                    .setColor("#99999")
                    .setFooter ("BOT DEVELOPER : skypro👑#6437 | DESTINY OWNER")
                    .setTitle ('Message Has been Sent.')
                    

                    message.channel.send(embed);
                    message.delete();
}
}
})

