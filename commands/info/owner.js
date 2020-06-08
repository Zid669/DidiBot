const Discord = require('discord.js');
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "Owner",
    aliases:["owner"],
    category: "info",
    description: "Shows you my smexy owner",
    usage: "!Owner",
    run: async (client, message, args) => {

      const embed = new Discord.MessageEmbed();
          embed.setImage("https://cdn.discordapp.com/avatars/400801854608637953/a_4e324af90969cb92ae3e895f9ad0e704.gif")
          embed.setColor("RANDOM")
          embed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() )
          embed.setDescription("Zid#6669 ❤️")
          embed.setTimestamp();

       message.channel.send(embed).then(async msg => {
        const emoji = await promptMessage(msg, message.author, 30, ["❤️"]);

        if(emoji === "❤️"){
            message.channel.send(`${message.author.tag} True`)
        }

       })

    }
}
