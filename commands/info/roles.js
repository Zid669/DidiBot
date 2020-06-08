module.exports = {
    name: "Roles",
    aliases: "roles",
    category: "info",
    description: "Shows you the number of roles in the guild",
    usage: "!Roles",
    run: async (client, message, args) => {
        message.guild.roles.fetch()
        .then(roles => message.channel.send(`This guild has ${roles.cache.size} roles.`))

    }
  }