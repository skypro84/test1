const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {
let embedContent =message.content.substring(7);
let embed = new MessageEmbed();
embed.setDescription(embedContent);
embed.setColor('RANDOM');
embed.setTitle("Destiny Announcements")
embed.setTimestamp();
//   embed.setImage(message.author.displayAvatarURL());
embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
embed.setThumbnail(message.author.displayAvatarURL());
message.channel.send(embed);
console.log(message.content);
},
aliases: ['embed'],
description: 'Embed message for owners'
}