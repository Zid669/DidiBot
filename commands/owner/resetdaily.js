const Discord = require('discord.js')
const eco = require('discord-economy')

module.exports = {
    name: "dailyreset",
    category:"owner",
    run: async(client, message, args) => {
        if(message.author.id !== "400801854608637953") return message.reply("Owner only sorry ;(")
        var output = await eco.ResetDaily(message.author.id)
 
        message.reply(output)
    }
}