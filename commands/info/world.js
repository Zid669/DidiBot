const Discord = require('discord.js')
const corona = require('coronabot.js')
const lang = "eng"

module.exports = {
    name: "World",
    aliases: ["world"],
    category: "info",
    description: "Shows you the current COVID-19 situation in the world",
    usage: "!World",
    run: async(client, message, args) => {
        corona.worldInfo(message,lang)
    }
}