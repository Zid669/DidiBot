const Discord = require('discord.js')

module.exports = {
    name: "Name",
    aliases: ["nm", "name"],
    category:"owner",
    description: "Changes name",
    usage: " ",
    run: async (client, message, args) => {

          if(message.author.id == '400801854608637953') {
              try {
                const name = args.join(" ")
                client.user.setUsername(name)
                .then(message.channel.send(`My name is now ${name}`))

              } catch (e) {
                  return message.channel.send(`Error while evaluating: \`${e.message}\``);
              }

            } else {
              return message.reply("Nah").then(msg => msg.delete(5000))
            }

        }
}
