const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
    const embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setThumbnail(client.user.avatarURL({format: "png", dynamic: true}))
        embed.setDescription(`To invite me to your server click [here](https://discord.com/api/oauth2/authorize?client_id=713768567124000838&permissions=8&scope=bot)
        To elaborate on a command do !help [command name]
        Support Server coming soon!`)
        embed.addField("Fun", `
        Meme, Rps, Say, Oldest, Translate`, true)
        embed.addField("Currency", `
        Balance, Coinflip, Daily, Leaderboard, Transfer/pay, Work`, true)
        embed.addField("Info", `
        Avatar, Country, Guild, Invite, Owner, Ping, Roles, Symptoms, Uptime, Whois, World, Emoji`, true)
        embed.addField("Moderation", `
        Ban, Clear, Kick, Logsset, Prefixset, Welcomeset`, true)
        embed.addField("Images", `
        Triggered, Spank, Rip`, true)
        

        if(!message.channel.nsfw){
            embed.addField("NSFW", `
            This feature is hidden in non NSFW channels to access send in a channel marked as NSFW.`, true)

        } else {
            embed.addField("NSFW",`
        Bdsm, Hentai, Maid, Neko, Orgy, Panties`, true)
        }
        
        message.channel.send(embed)

}

function getCMD(client, message, input) {
    const embed = new Discord.MessageEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));

    let info = `No information found for command **${input.toLowerCase()}**`;

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info));
    }

    if (cmd.name) info = `**Command name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter(`Syntax: <> = required, [] = optional`);
    }

    return message.channel.send(embed.setColor("GREEN").setDescription(info));
}
