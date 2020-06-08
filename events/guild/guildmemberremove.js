module.exports = (member) => {
    const fs = require('fs')
    const Discord = require("discord.js")
    const guild = member.guild
    let logschannel = JSON.parse(fs.readFileSync("./logs.json", "utf8"))
    let welcomechannel = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))

    const lc = member.guild.channels.resolve(logschannel[member.guild.id].channel)

    const wc = member.guild.channels.resolve(welcomechannel[member.guild.name].channel)

    const embedd = new Discord.MessageEmbed()
    embedd.setAuthor(member.guild.name, member.guild.iconURL())
    embedd.setColor("#ff0000")
    embedd.setThumbnail(member.user.avatarURL({format: "png", dynamic: true}))
    embedd.setTitle(member.user.tag + " just left!")
    embedd.setDescription(`New member count is ${member.guild.memberCount}`)
    embedd.addField("They joined on", member.guild.joinedAt)
    embedd.setTimestamp()

    if(lc){
        lc.send(embedd)
        .catch(err => {
            if (err) return console.log(`I threw this error: ${err}`)
        })
    }else {
        console.log("no logs")
    }
    if(!wc) return;

    const embed = new Discord.MessageEmbed()
    embed.setColor("RANDOM")
    embed.setThumbnail(member.user.avatarURL({format: "png", dynamic: true}))
    embed.setTitle(`${member.user.tag} just left!`)
    embed.setDescription(`Bye Bye!`)

    

    wc.send(embed)
}