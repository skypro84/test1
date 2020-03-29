const { Client, MessageAttachment } = require('discord.js');
module.exports = {
    run: async(client, message, args) => {

            // Create the attachment using MessageAttachment
            const attachment = new MessageAttachment('./Polish_20200325_124317484.jpg');
            // Send the attachment in the message channel with a content
            message.channel.send(`${message.author}, Here is our Discord Rules`, attachment);
          
    
},
aliases: ['drules'],
description: 'Rules for Guild Members'
}