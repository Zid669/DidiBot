const { MessageEmbed } = require("discord.js");
const fs = require('fs');
module.exports = async (oldMessage, newMessage) => {
  try {
    let embed = new MessageEmbed()
      .setThumbnail(oldMessage.author.avatarURL({format: "png", dynamic: true}))
      .setTitle(`New message edited`)
      .setColor(`GREEN`)
      .setDescription(
        `**The user ${oldMessage.author.tag} has edited a message in <#${oldMessage.channel.id}>**`
      )
      embed.addField(`Old Content`, oldMessage.content, true)
      embed.addField(`New Content`, newMessage.content, true);
    
    let logschannel = JSON.parse(fs.readFileSync("./logs.json", "utf8"))

    const lc = oldMessage.guild.channels.resolve(logschannel[oldMessage.guild.id].channel)

    if(!lc) return

    lc.send(embed);
  } catch (e) {}
};