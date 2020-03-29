const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {
           
           // Send the user's avatar URL
             message.reply(message.author.displayAvatarURL());
    },
             aliases: ['avatar'],
             description: 'Show the Avatar'
             }