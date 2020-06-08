const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
    name: 'Orgy',
    aliases: ["orgy"],
    category: "NSFW",
    description: "Shows you a naughty picture",
    usage: "!Orgy",
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return message.channel.send("You naughty naughty");

        const embed = new Discord.MessageEmbed();
        embed.setImage(akaneko.nsfw.orgy());
        embed.setColor("RANDOM");
        embed.setDescription("Orgy");
        embed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL());
        embed.setTimestamp();

        message.channel.send(embed);
    }
}