const Discord = require('discord.js')
const Canvacord = require("canvacord");
const canva = new Canvacord.Canvas();

module.exports = {
    name: "Spank",
    aliases: ["spank"],
    category: "images",
    usage: "!Spank [@user1234]",
    description: "Creates a cool image",
    run: async(client, message, args) => {
        let person = message.mentions.members.first()
        if(!person) return message.reply("tag someone")

        let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"})
        let avatarr = person.user.displayAvatarURL({dynamic: false, format: "png"})
        let image = await canva.spank(avatar, avatarr)
        let attachment = new Discord.MessageAttachment(image, "spank.png")

        return message.channel.send(attachment)
        
    }
}