const Discord = require("discord.js")
module.exports = {
    name: "say",
    alliases:["s", "Say"],
    category: "fun",
    description: "The bot return your message!",
    usage: "!say <message>",
    run: async (client, message, args) => {

      const embed = new Discord.MessageEmbed()
      embed.setDescription(args.join(" "))
      embed.setFooter(`Message requested by ${message.author.username}`, message.author.displayAvatarURL())
      embed.setColor("RANDOM")
      embed.setTimestamp()

      message.channel.send(embed)

    }
  }
