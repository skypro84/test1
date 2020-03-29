const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
.setColor('RANDOM')
.setTitle(message.guild.name, )
.addField(`Survivor`, message.member.user, )
.setThumbnail(message.guild.iconURL())
.addField(`Members`, message.guild.memberCount, )

message.channel.send(embed);
    
    
},
aliases: ['members'],
description: 'Info members Server'
}