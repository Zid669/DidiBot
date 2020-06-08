const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    name: "Logsset",
    aliases: ["logsset", "ls"],
    category: "moderation",
    description: "Set yourself a log channel",
    usage: "!Logsset <Channel ID>",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the perms")
        if(!args[0]){
            message.reply("Please give me the ID/ tag your preffered log channel")
        }

        const chan = args[0] 
        let logschannel = JSON.parse(fs.readFileSync("./logs.json", "utf8"))

        logschannel[message.guild.id] = {
            channel: chan
        }
        
        fs.writeFile("./logs.json", JSON.stringify(logschannel), (err) => {
            if (err) console.log(err)
        })

        message.channel.send(`Logs set to <#${chan}>` )

        
        
    }
}