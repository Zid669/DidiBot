const Discord = require('discord.js');
const eco = require('discord-economy');
let cooldown = new Set();
let cdseconds = 86400;

module.exports = {
    name: "Work",
    aliases: ['work'],
    category: 'currency',
    description: "Gives you money for bieng such an upstanding citizen or not...",
    usage: "!Work",
    run: async(client, message, args) => {
        if(cooldown.has(message.author.id)){
            message.delete()
        return message.reply("You have to wait 1 hour to use this command again")
        }
        cooldown.add(message.author.id);



    var output = await eco.Work(message.author.id)
    //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.
    if (output.earned == 0) return message.reply('Awh, you did not do your job well so you earned nothing!')
    message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`)

setTimeout(() => {
    cooldown.delete(message.author.id)
}, cdseconds * 1000)

    }
}