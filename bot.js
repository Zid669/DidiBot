const { Client, Collection} = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const talkedRecently = new Set();






const client = new Client({
    disableEveryone: true
});

client.events = new Collection();



client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    require("./events/client/ready")(client);

});


client.on("channelCreate", (channel) => {
    require("./events/guild/channelCreate")(channel);
})

client.on("channelDelete", (channel) => {
    require("./events/guild/channelDelete")(channel);
})


client.on("messageUpdate", (oldMessage, newMessage) => {
    require("./events/guild/messageupdate")(oldMessage, newMessage);
})

client.on("guildMemberAdd", async (member) => {
    require("./events/guild/guildmemberadd")(member);
})

client.on("guildMemberRemove", async (member) => {
    require("./events/guild/guildmemberremove")(member);
})

client.on("message", async message => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: "!"
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;




if (talkedRecently.has(message.author.id))
return;

// Adds the user to the set so that they can't talk for 2.5 seconds
talkedRecently.add(message.author.id);
setTimeout(() => {
// Removes the user from the set after 2.5 seconds
talkedRecently.delete(message.author.id);
}, 5000);
    

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
});



client.login(process.env.TOKEN);
