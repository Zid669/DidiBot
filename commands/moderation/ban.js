const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
const fs = require("fs")

module.exports = {
    name: "ban",
    category: "moderation",
    aliases: ["Ban", "b"],
    description: "bans the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        let logschannel = JSON.parse(fs.readFileSync("./logs.json", "utf8"))

        const logChannel = message.guild.channels.resolve(logschannel[message.guild.id].channel) 
        
        if(!logchannel) {
            message.reply('couldn't find log channel make one using !logsset')
                          }
        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Please provide a person to ban.")
                .then(m => m.delete({timeout: 5000}));
        }

        // No reason
        if (!args[1]) {
            return message.reply("Please provide a reason to ban.")
                .then(m => m.delete({timeout: 5000}));
        }

        // No author permissions
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ You do not have permissions to ban members. Please contact a staff member")
                .then(m => m.delete({timeout: 5000}));
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ I do not have permissions to ban members. Please contact a staff member")
                .then(m => m.delete({timeout: 5000}));
        }

        const toBan = message.mentions.members.first() 

        // No member found
        if (!toBan) {
            return message.reply("Couldn't find that member, try again")
                .then(m => m.delete({timeout: 5000}));
        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            return message.reply("You can't ban yourself...")
                .then(m => m.delete({timeout: 5000}));
        }

        // Check if the user's banable
        if (!toBan.bannable) {
            return message.reply("I can't ban that person due to role hierarchy, I suppose.")
                .then(m => m.delete({timeout: 5000}));
        }
        
        const embed = new Discord.MessageEmbed()
            embed.setColor("#ff0000")
            embed.setThumbnail(toBan.user.displayAvatarURL)
            embed.setFooter(message.member.displayName, message.author.displayAvatarURL)
            embed.setTimestamp()
            embed.setDescription(stripIndents`**- banned member:** ${toBan} (${toBan.id})
            **- banned by:** ${message.member} (${message.member.id})
            **- Reason:** ${args.slice(1).join(" ")}`);

       

        const promptEmbed = new Discord.MessageEmbed()
            promptEmbed.setColor("GREEN")
            promptEmbed.setAuthor(`This verification becomes invalid after 30s.`)
            promptEmbed.setDescription(`Do you want to ban ${toBan}?`)

         

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Well.... the ban didn't work out. Here's the error ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`ban canceled.`)
                    .then(m => m.delete({timeout: 10000}));
            }

            
        });
    }
};
