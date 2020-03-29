const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');
const Discord = require("discord.js");
let coins = require("../../coins.json");
let xp = require("../../xp.json");
module.exports = {
    run: async (bot, message, args) => {
      if(args[0] == "help"){
        message.reply("Usage: !report <user> <reason>");
        return;
      }
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Couldn't find user.");
      let rreason = args.join(" ").slice(22);
  
      let reportEmbed = new MessageEmbed()
      .setDescription("Reports")
      .setColor(orange)
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", rreason);
  
      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
  
  
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
},
aliases: ['report'],
description: 'Fun Dogs'
}