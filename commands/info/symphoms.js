const Discord = require('discord.js')
const corona = require('coronabot.js')
const lang = "eng"

module.exports = {
    name: "Symptoms",
    aliases: ['symptoms'],
    category: "info",
    description: "Shows you the symptoms for COVID-19",
    usage: "!symptoms",
    run: async(client, message, args) => {
        corona.sympthoms(message, lang)
    }
}