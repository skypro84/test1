const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
.setColor('RANDOM')
.setTitle(message.guild.name, true)
.addField(`Owner`, message.guild.owner, true )
.setThumbnail(message.guild.iconURL())
.addField(`Members`, message.guild.memberCount, true)
.addField(`Username`, message.member.user, true)
.addField(`You Joined`, message.member.joinedAt )
.addField(`From`, message.guild.region, true)
.addField(`Channel`, message.channel.name, true)
message.channel.send(embed);
    
    
},
aliases: ['info'],
description: 'Info Server'
}