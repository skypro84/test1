const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle("Player Information")
        .setDescription("Destiny Official Discord")
        .setColor("RANDOM" )
        .setThumbnail(message.author.avatarURL())
        .addField(`Player Name`, message.author.tag, true)
        .addField(`ID`, message.author.id, true)
        .addField(`You Joined`, message.member.joinedAt )
        .addField(`Status`, message.author.presence.status, true)
        .addField(`Channel`, message.channel.name, true)
message.channel.send(embed);
    
    
},
aliases: ['userinfo'],
description: 'Player Information'
}