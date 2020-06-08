const Discord = require('discord.js')


module.exports = {
    name: "Avatar",
    aliases:["avatar", "a"],
    category: "info",
    description: "Shows you your amazing avatar and gives you it's URL",
    usage: "!Avatar [@user1234]",
    run: async (client, message, args) => {

      const embed = new Discord.MessageEmbed()
      embed.setImage(message.author.avatarURL({format: "png", dynamic: true}))
      embed.setDescription(`[Your Avatar URL](${message.author.displayAvatarURL({format: "png", dynamic: true})})`)
      embed.setColor("RANDOM")
      embed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({format: "png", dynamic: true}))
      embed.setTimestamp();

      if(!args[0]) return message.channel.send(embed);

      const person = message.mentions.members.first() 

      const embedd = new Discord.MessageEmbed()
      embedd.setImage(person.user.avatarURL({format: "png", dynamic: true}))
      embedd.setDescription(`[${person.user.username}'s Avatar URL](${person.user.displayAvatarURL({format: "png", dynamic: true})})`)
      embedd.setColor("RANDOM")
      embedd.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({format: "png", dynamic: true}))
      embedd.setTimestamp();

      

      
      if(args[0]) return message.channel.send(embedd)
    }
  }
