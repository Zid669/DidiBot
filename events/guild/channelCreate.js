module.exports = (channel) => {
    const fs = require('fs')
    const Discord = require("discord.js")
    const guild = channel.guild
    let logschannel = JSON.parse(fs.readFileSync("./logs.json", "utf8"))

    const lc = channel.guild.channels.resolve(logschannel[channel.guild.id].channel)

    if(!lc) return

    const embed = new Discord.MessageEmbed()
    embed.setAuthor(guild.name, guild.iconURL({format: "png", dynamic: true}))
    embed.setTitle(`New channel created!`)
    embed.setDescription(`Its name: ${channel.name}`)
    embed.setColor("#02F51B")
    embed.addField("Created on", `
    ${channel.createdAt}`)
    embed.addField("Channel type",`
    ${channel.type}`)
    embed.addField("Channels catrgory",`
    ${channel.parent}`)
    embed.addField("Category ID",`
    ${channel.parentID}`)
    embed.setFooter(`Channel ID: ${channel.id}`)
    embed.setTimestamp();

    lc.send(embed)
}

