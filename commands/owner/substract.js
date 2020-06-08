const Discord = require('discord.js')
const eco = require('discord-economy')

module.exports = {
    name: "Substract",
    aliases: ['substract'],
    category: 'owner',
    run: async(client, message, args) => {
        let person = message.mentions.members.first()
        if(!args[0]) return message.reply("Tag someone dummy")
        const embedd = new Discord.MessageEmbed()
        embedd.setColor("RANDOM")
        embedd.setDescription(`I have removed ${args[1]} from ${person.user.username}'s account`)
        if(message.author.id === "400801854608637953"){
            eco.SubtractFromBalance(person.user.id, args[1])
            message.channel.send(embedd)
        } else {
            message.reply("Sorry you're not my owner")
        }
    }
}