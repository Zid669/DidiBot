const Discord = require('discord.js')


module.exports = {
    name: "Serwery",
    aliases: ["serwery", "s"],
    category: "Special",
    run: async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle("Nasze Serwery!")
        .setThumbnail(message.guild.iconURL())
        .setColor("RANDOM")
        .setDescription("Wszystkie IP")
        embed.addField("ONLY MIRAGE", `
        91.224.117.181:27015`)
        embed.addField("ONLY AWP", `
        91.224.117.238:27015`)
        embed.addField("Arenki 1v1", `
        91.224.117.223:27015`)

        if (message.guild.id === "719167278175748178") {
            message.channel.send(embed)
        } else {
            return
        }
    }
}