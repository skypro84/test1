const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');
const Discord = require("discord.js")
module.exports = {
    run: async(client, message, args) => {
        message.delete()
        const TicketEmbed = new MessageEmbed()
        .setColor("#cd3")
        .setAuthor("Ticket Support")
        .setDescription("To create a ticket, press the reaction")
        .setFooter("Ticket Support")
    
        message.channel.send(TicketEmbed).then(async msg => {
            msg.react("🎟️")
        })    
    
},
aliases: ['ticket'],
description: 'Ticket support'
}