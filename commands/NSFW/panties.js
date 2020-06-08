const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
    name: 'Panties',
    aliases: ["panties"],
    category: "NSFW",
    description: "Shows you a naughty picture",
    usage: "!Panties",
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return message.channel.send("You naughty naughty");

        const embed = new Discord.MessageEmbed();
        embed.setImage(akaneko.nsfw.panties());
        embed.setColor("RANDOM");
        embed.setDescription("Pantsu");
        embed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL());
        embed.setTimestamp();

        message.channel.send(embed);
    }
}