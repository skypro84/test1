const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Donation Pack 2", true)
        .setThumbnail(message.guild.iconURL())
        .addField(`DINOS`, "**12 Dinos lvl 1200**\n", true)
        .addField(`BLUPRINTS`, "**12 Max armor BPS**", true)
        .addField(`SEED BERRY`, "**30.000**", true)
        .addField(`SADDLES`, "**15 Saddles ASCENDANT**", true)
        .addField(`VAULT`, "**4 Vault of Ammo (Shard/ADV)**", true)

        .addField(`TEK`, "**10 Full armour BPS + Structures**", true)

        .addField(`PRICE`, "**50 $ PAYPAL (PM @skypro / @𝐀ndreice21 / @Kðrå for BUY!)**", true)

message.channel.send(embed);
    
    
},
aliases: ['pack2'],
description: 'Donation pack Dinos lvl 1200'
}