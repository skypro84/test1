const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = {
    run: async(client, message, args) => {

        let msg = await message.channel.send("Fetching a meme, please wait a second!");
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                let embed = new MessageEmbed()
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
                msg.edit(embed)
    
            })
    
    
        
        },
            aliases: ['meme'],
            description: 'Fun meme'
            }