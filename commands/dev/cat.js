const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {

    let msg = await message.channel.send("Generating...")

    fetch(`http://aws.random.cat/meow`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let cEmbed = new MessageEmbed()
        .setColor(cyan)
        .setAuthor(`${client.user.username} CATS!`, message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

            message.channel.send(cEmbed)
            msg.delete();
    })
        },
            aliases: ['cat'],
            description: 'Fun Cats'
            }