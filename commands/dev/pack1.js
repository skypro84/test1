const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Donation Pack 1", true)
        .setThumbnail(message.guild.iconURL())
        .addField(`DINOS`, "**8 Dinos lvl 1000**\n", true)
        .addField(`BLUPRINTS`, "**12 Max armor BPS**", true)
        .addField(`SEED BERRY`, "**8000**", true)
        .addField(`SADDLES`, "**6 Saddles ASCENDANT**", true)
        .addField(`VAULT`, "**1 Vault of Ammo (Shard/ADV)**", true)

        .addField(`TEK`, "**4 Full armour BPS + Structures**", true)

        .addField(`PRICE`, "**35 $ PAYPAL (PM @skypro / @𝐀ndreice21 / @Kðrå for BUY!)**", true)

message.channel.send(embed);
    
    
},
aliases: ['pack1'],
description: 'Donation pack Dinos lvl 1000'
}