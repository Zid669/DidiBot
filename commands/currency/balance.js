const Discord = require('discord.js')
const eco = require('discord-economy')

module.exports = {
    name: "Balance",
    aliases: ['balance', 'Bal', 'bal'],
    category: 'currency',
    description: "Shows you your current balance",
    usage: "!Balance [@user1234]",
    run: async(client, message, args) => {

        const person = message.mentions.members.first()

        const output = await eco.FetchBalance(message.author.id)

        const embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setDescription(`Your balance is ${output.balance} coins`)

        if(!args[0]) return message.channel.send(embed)

        let outputt = await eco.FetchBalance(person.user.id)

        const embedd = new Discord.MessageEmbed()
        embedd.setColor("RANDOM")
        embedd.setDescription(`${person.user.username}'s balance is ${outputt.balance} coins`)

        message.channel.send(embedd)

    }
}