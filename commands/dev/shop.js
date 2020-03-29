const { Client, MessageAttachment } = require('discord.js');
module.exports = {
    run: async(client, message, args) => {

        const attachment = new MessageAttachment('./destiny_admin_shop.jpg');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Here is our Dinos Prices\n If you want buy just PM an admin was assigned on your Server...\n(PS: Dont spam  @Owner for the Shop)`, attachment);
      
    
},
aliases: ['shop'],
description: 'Shop in game for Players (JPG)'
}