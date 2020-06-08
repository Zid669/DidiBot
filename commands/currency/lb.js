const Discord = require('discord.js')
const eco = require('discord-economy')

module.exports = {
    name: "Leaderboard",
    aliases: ["leaderboard", "lb"],
    catergory: "currency",
    description: "Shows you the wealthiest members of society",
    usage: "!Leaderboard",
    run: async(client, message, args) => {
        if (message.mentions.users.first()) {
 
            var output = await eco.Leaderboard({
              filter: x => x.balance > 50,
              search: message.mentions.users.first().id
            })
            message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output} on my leaderboard!`);
       
          } else {
       
            eco.Leaderboard({
              limit: 3, //Only takes top 3 ( Totally Optional )
              filter: x => x.balance > 50 //Only allows people with more than 100 balance ( Totally Optional )
            }).then(async users => { //make sure it is async
       
              if (users[0]) var firstplace = await client.users.resolve(users[0].userid) //Searches for the user object in discord for first place
              if (users[1]) var secondplace = await client.users.resolve(users[1].userid) //Searches for the user object in discord for second place
              if (users[2]) var thirdplace = await client.users.resolve(users[2].userid) //Searches for the user object in discord for third place

              const embed = new Discord.MessageEmbed();
              embed.setColor("RANDOM");
              embed.setDescription(`My leaderboard:
              1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}
              2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}
              3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}`)
              embed.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());
              embed.setTimestamp();
       
              message.channel.send(embed)
            })
        }
    }
}