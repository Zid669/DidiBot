const Discord = require("discord.js")
const fs = require("fs")

module.exports = {
    name: "Prefixset",
    aliases: ['prefixset'],
    category: "moderation",
    description: "Set me a custom prefix for you guild",
    usage: "!Prefixset <Prefix>",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have the perms")
        if(!args[0]) return message.reply("Please give me a prefix")
        
        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

        prefixes[message.guild.id] = {
            prefixes: args[0]
        }
        
        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
            if (err) console.log(err)
        })

        const embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setTitle("Prefix Set!")
        embed.setDescription(`Set to ${args[0]}`)

        message.channel.send(embed)
    }
}