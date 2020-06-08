const Discord = require("discord.js")
const corona = require('coronabot.js')
const lang ='eng'

module.exports = {
    name: "Country",
    aliases: ['country'],
    category: "info",
    description: "Shows you the current COVID-19 situation in your selected country",
    usage: "!Country <Name of country has to start with capital letter>",
    run: async(client, message, args) => {
        corona.countryInfo(message,args,lang)
        
    }
}