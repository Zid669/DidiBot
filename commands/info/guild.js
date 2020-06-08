const Discord = require('discord.js')

module.exports = {
    name: "Guild",
    aliases: ["guild"],
    category: "info",
    description: "Shows you information about the guild",
    usage: "!guild",
    run: async(client, message, args) => {

        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };


        message.guild.roles.fetch()
        message.guild.channels.resolve()


        const embed = new Discord.MessageEmbed();
               embed.setColor("RANDOM")
               embed.setAuthor(message.guild.name, message.guild.iconURL())
               embed.setThumbnail(message.guild.iconURL())
               embed.addField("Name", message.guild.name, true)
               embed.addField("ID", message.guild.id, true)
               embed.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
               embed.addField("Region", message.guild.region, true)
               embed.addField("Channels", message.guild.channels.cache.size, true)
               embed.addField("Roles", message.guild.roles.cache.size, true)
               embed.addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
           
           
               message.channel.send(embed)





    }
}