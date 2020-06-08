const Discord = require('discord.js')
const Canvacord = require("canvacord");
const canva = new Canvacord.Canvas();

module.exports = {
    name: "Rip",
    aliases: ["rip"],
    category: "images",
    usage: "!Rip [@user1234]",
    description: "Creates a cool image",
    run: async(client, message, args) => {
        let person = message.mentions.members.first()
        if(person) {
            let avatar = person.user.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canva.rip(avatar);
            let attachment = new Discord.MessageAttachment(image, "rip.png");
            return message.channel.send(attachment);
        } else {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canva.rip(avatar);
        let attachment = new Discord.MessageAttachment(image, "rip.png");
        return message.channel.send(attachment);
        }
        
    }
}