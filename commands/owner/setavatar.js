const Discord = require('discord.js')

module.exports = {
    name: "Setavatar",
    aliases: ["sa", "setavatar"],
    description: "Changes name",
    category:"owner",
    usage: " ",
    run: async (client, message, args) => {

      if(message.author.id == '400801854608637953') {
          try {
            const name = args.join(" ")
            client.user.setAvatar(name)
            .then(message.channel.send(`My Avatar Was Changed To ${name}`))

          } catch (e) {
              return message.channel.send(`Error while evaluating: \`${e.message}\``);
          }

        } else {
          return message.reply("Nah").then(msg => msg.delete(5000))
        }

    }
  }
