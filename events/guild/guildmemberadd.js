module.exports = async (member) => {
    const fs = require('fs')
    const Discord = require("discord.js")
    const guild = member.guild
    let logschannel = JSON.parse(fs.readFileSync("./logs.json", "utf8"))
    let welcomechannel = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))

    let lc = member.guild.channels.resolve(logschannel[member.guild.id].channel)

    const embedd = new Discord.MessageEmbed()
    embedd.setColor("#02F51B")
    embedd.setAuthor(member.guild.name, member.guild.iconURL())
    embedd.setThumbnail(member.user.avatarURL({format: "png", dynamic: true}))
    embedd.setTitle(member.user.tag +" joined the server!")
    embedd.setDescription(`He is the #${member.guild.memberCount} to join`)
    embedd.addField(member.user.tag + "'s Account Was Created On", member.user.createdAt)
    embedd.setTimestamp();


    if(lc){
         lc.send(embedd)
        .catch(err => {
            if (err) return console.log(`I threw this error: ${err}`)
        })
        } else{
            console.log("no logs")
        }
    

    const wc = member.guild.channels.resolve(welcomechannel[member.guild.name].channel)

    if(!wc) return;
    

    const embed = new Discord.MessageEmbed()
    embed.setColor("#02F51B")
    embed.setThumbnail(member.user.avatarURL({format: "png", dynamic: true}))
    embed.setTitle(`${member.user.tag} just joined!`)
    embed.setDescription(`Welcome to ${member.guild.name} you're the ${member.guild.memberCount} member to join`)

    
    wc.send(embed)
}