const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
    name: "Maid",
    aliases: ["maid"],
    category: "NSFW",
    description: "Shows you a naughty picture",
    usage: "!Maid",
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return message.channel.send("You naughty naughty");

        const embed = new Discord.MessageEmbed();
        embed.setImage(akaneko.nsfw.maid());
        embed.setColor("RANDOM");
        embed.setDescription("You got some wierd fetish bro");
        embed.setFooter(`Requested by ${message.author.username}.`, message.author.displayAvatarURL());
        embed.setTimestamp();

        message.channel.send(embed);
    }
}