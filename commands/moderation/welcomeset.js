const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    name: "Welcomeset",
    aliases: ["welcomeset", "ws"],
    category: "moderation",
    description: "Set yourself a welcome channel",
    usage: "!Welcomeset <Channel ID/#channel>",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the perms")
        if(!args[0]){
            message.reply("Please give me the ID / tag your preffered welcome channel")
        }


        let logschannel = JSON.parse(fs.readFileSync("./logs.json", "utf8"))

        const logchannel = message.guild.channels.resolve(logschannel[message.guild.id].channel)

        const embedd = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({format: "png", dynamic: true}))
        .setTitle(`Welcome channel was modified by ${message.author.tag}`)
        .setDescription(`It is now <#${args[0]}> if you desire to change it use !Welcomeset`)
        .setColor("RANDOM")
        .setTimestamp();

        if(!logchannel){
            message.reply("Couldn't find log channel you can set one up using !logsset ChannelID/#channel").then(m => m.delete(2500))
        } else{
            logchannel.send(embedd)
            
        }

        await message.channel.send(`Welcome channel set to <#${args[0]}>`)

        let welcomechannel = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))

        welcomechannel[message.guild.name] = {
            channel: args[0]
        }
        
        fs.writeFile("./welcome.json", JSON.stringify(welcomechannel), (err) => {
            if (err) console.log(err)
        })


        
        
    }
}