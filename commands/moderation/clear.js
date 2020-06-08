const Discord = require('discord.js')
const fs = require('fs')


module.exports = {
    name: "clear",
    aliases: ["purge", "nuke", "c"],
    category: "moderation",
    description: "Clears the chat",
    usage: "!Clear <number>",
    run: async (client, message, args) => {
        let logschannel = JSON.parse(fs.readFileSync("./logs.json", "utf8"))

        const logchannel = message.guild.channels.resolve(logschannel[message.guild.id].channel)


        //https://discordapp.com/api/webhooks/718147575932256317/ZdoUSzqSXDbaohjU-gYy_3tOQ5y7BMHUAi4VLfWCVpf4BDvSXU2KrYgCPaO8s1j8cpHh
        

        if (message.deletable) {
            message.delete();
        }

        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You can't delete messages....").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Yeah.... That's not a number? I also can't delete 0 messages by the way.").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Sorryy... I can't delete messages.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`🧹**I deleted \`${deleted.size}\` messages.**🧹`)).then(d => d.delete({timeout: 5000}))
            .catch(err => message.reply(`Something went wrong... ${err}`));

            const clearembed = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({format: "png", dynamic: true}))
        .setColor("RANDOM")
        .setTitle(`${message.author.tag} Bulk deleted messages!`)
        .setDescription(`Ammount of deleted messages by the user **${deleteAmount}**.
        In the channel <#${message.channel.id}>.`)
        
        if(!logchannel){
            message.reply("Couldn't find log channel you can set one up using !logsset ChannelID").then(m => m.delete(2500))
        } else {
            logchannel.send(clearembed)
        }

    }
}
