const Discord = require('discord.js')

module.exports = {
    name: 'Whois',
    aliases: ['whois'],
    category: 'info',
    description: "Shows you information about you or another user",
    usage: "!Whois [@user1234]",
    run: async(client, message, args) => {

        const person = message.mentions.members.first() 

        const embed = new Discord.MessageEmbed();
        embed.setThumbnail(message.author.avatarURL({format: 'png', dynamic: true}));
        embed.setColor("RANDOM");
        embed.setDescription(`${message.author.username}`)
        embed.addField("Your Tag",`
        ${message.author.tag}`)
        embed.addField("Your ID",`
        ${message.author.id}`)
        embed.addField("When Was Your Account Created?",`
        ${message.author.createdAt}`)
        embed.addField("Your Avatar URL",`
        [Click](${message.author.displayAvatarURL()})`)
        embed.addField("Are You A Bot?",`
        <:no:713803695032238220>`)
        embed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL());
        embed.setTimestamp();


        if(!args[0]) return message.channel.send(embed);


        const embedd = new Discord.MessageEmbed();
        embedd.setThumbnail(person.user.avatarURL({format: 'png', dynamic: true}));
        embedd.setDescription(`${person.user.username}`)
        embedd.setColor("RANDOM");
        embedd.addField(`${person.user.username}'s Tag`, `
        ${person.user.tag}`);
        embedd.addField(`${person.user.username}'s ID`,`
        ${person.user.id}`)
        embedd.addField(`When Was ${person.user.username}'s Account Created`,`
        ${person.user.createdAt}`)
        embedd.addField(`${person.user.username}'s Avatar URL`, `
        [Click](${person.user.displayAvatarURL()})`)
        embedd.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL());
        embedd.setTimestamp();

        if(person.user.lastMessage){
            embedd.addField(`${person.user.username}'s Latest Message`,
        `${person.user.lastMessage}` )
        } else {
            embedd.addField(`${person.user.username}'s Latest Message`, "None")
        }

        if (person.user.bot){
            embedd.addField(`Is ${person.user.username} A Bot?`,`
            <:TickYes:713803684999594064>`)
        } else{
            embedd.addField(`Is ${person.user.username} A Bot?`, `
            <:no:713803695032238220>`)
        }


        if(args[0]) return message.channel.send(embedd)




    }
}