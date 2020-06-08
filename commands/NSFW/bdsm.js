const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
    name: 'Bdsm',
    aliases: ["bdsm"],
    category: "NSFW",
    description: "Shows you a naughty picture",
    usage: "!Bdsm",
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return message.channel.send("You naughty naughty");

        const embed = new Discord.MessageEmbed();
        embed.setImage(akaneko.nsfw.bdsm());
        embed.setColor("RANDOM");
        embed.setDescription("BDSM");
        embed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL());
        embed.setTimestamp();

        message.channel.send(embed);
    }
}