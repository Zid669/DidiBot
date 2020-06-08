const Discord = require("discord.js")

module.exports = {
    name: "Shizo",
    aliases: ["shizo"],
    category: 'owner',
    run: async(client, message, args) => {
        
        message.author.send("Shizo is gay")
    }
}