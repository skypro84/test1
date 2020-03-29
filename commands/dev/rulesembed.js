const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle("RULES", true)
        .setThumbnail(message.guild.iconURL())
        .addField(`Help Rules Commad`, "**Use `!drules` for check our Rules**\n", true)
message.channel.send(embed);
    
    
},
aliases: ['rules'],
description: 'Rules info'
}