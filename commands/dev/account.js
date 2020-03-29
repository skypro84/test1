const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, ) => {
        const embed = new MessageEmbed()

        .setTitle(`${message.author.username}'s profile`)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .addField("Account created", `${new Date(message.author.createdAt).toLocaleDateString()} ${new Date(message.author.createdAt).toLocaleTimeString()}`)
        .setColor(message.author.displayHexColor)
        .setTimestamp()
        .setFooter("DESTINY OFFICIAL BOT ~")
        message.channel.send(embed)
    },
    
    aliases: ['me'],
    description: 'Help menu for Guild Members'
    }