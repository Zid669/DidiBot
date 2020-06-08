module.exports = (client) => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setActivity("!help || Looking at " + client.guilds.cache.size + " Servers", { type: 'PLAYING'})


}