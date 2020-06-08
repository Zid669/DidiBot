const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
    name: "Neko",
    aliases: ["neko"],
    category: "NSFW",
    description: "Shows you a naughty picture",
    usage: "!Neko",
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return message.channel.send("You naughty naughty");

        const embed = new Discord.MessageEmbed();
        embed.setImage(akaneko.lewdNeko());
        embed.setColor("RANDOM")
        embed.setDescription("Neko :3");
        embed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL());
        embed.setTimestamp();
        
        message.channel.send(embed)

    }
}