
const {MessageEmbed} = require('discord.js'); 
module.exports = {
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .addField(`Player Name`, message.author.tag, true)
        .setThumbnail(message.author.avatarURL())
        .setTitle("**Thank You for using our Help**")
        .setDescription(`These are the avaliable commands for the Destiny Bot!\nThe bot prefix is: !`)

        .setColor("RANDOM")
        .addField(`Fun Commands:`, "``!cat`` ``!dog``")
        .addField(`Donation Commands:`, "``!pack1 for (Dinos LVL 1000)`` ``!pack2 for (Dinos LVL 1200)``")
        .addField(`Suggestion Commands:`, "``!poll + Message``")

        .addField(`Report a Player`, "``!say + name + reason``")

        .addField(`Check our rules`, "``!rules``")
        
        .addField(`For the shop in Game`, "``!shop``")

        message.author.send(embed);
    },
    
aliases: ['help'],
description: 'Help menu for Guild Members'
}