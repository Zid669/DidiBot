const Discord = require('discord.js')

module.exports = {
    name: "invite",
    aliases:["i", "Invite"],
    category: "info",
    description: "Invite link",
    usage: "!Invite",
    run: async (client, message, args) => {

      const embed = new Discord.MessageEmbed()
      embed.setImage(client.user.displayAvatarURL())
      embed.setDescription("[Invite Link Click Me](https://discord.com/api/oauth2/authorize?client_id=713768567124000838&permissions=8&scope=bot)")
      embed.setColor("RANDOM")
      embed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
      embed.setTimestamp();

      message.channel.send(embed);

    }
  }
