module.exports = (channel) => {
    const fs = require('fs')
    const Discord = require("discord.js")
    const guild = channel.guild
    let logschannel = JSON.parse(fs.readFileSync("./logs.json", "utf8"))

    const lc = channel.guild.channels.resolve(logschannel[channel.guild.id].channel)

    if(!lc) return

    const embed = new Discord.MessageEmbed()
    .setAuthor(guild.name, guild.iconURL({format: "png", dynamic: true}))
    .setTitle("A channel got deleted!")
    .setColor("#ff0000")
    embed.addField("Its name", channel.name)
    embed.addField("Its category", channel.parent)
    embed.addField("Category ID", channel.parentID)
    .setFooter(`Channel ID: ${channel.id}`)
    .setTimestamp();

    lc.send(embed)
}