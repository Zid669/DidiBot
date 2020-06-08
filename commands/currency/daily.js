const Discord = require('discord.js')
const eco = require('discord-economy')

module.exports = {
    name: "Daily",
    aliases: ['daily'],
    category: 'currency',
    description: "Gives you the daily ammount of coins which is 250",
    usage: "!Daily",
    run: async(client, message, args) => {
        var output = await eco.Daily(message.author.id)
        //output.updated will tell you if the user already claimed his/her daily yes or no.
     
        if (output.updated) {
     
          var profile = await eco.AddToBalance(message.author.id, 250)
          message.reply(`You claimed your daily coins successfully! You now own ${profile.newbalance} coins.`);
     
        } else {
          message.channel.send(`Sorry, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`)
        }
    }
}