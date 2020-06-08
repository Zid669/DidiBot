const Discord = require('discord.js')
const translate = require('@vitalets/google-translate-api');

module.exports = {
    name: "Translate",
    aliases: ["translate", "t"],
    category: "fun",
    usage:"!t <lang> <word/sentence>",
    description:"Translate your sentence to any language! To get a list do !t lang",
    run: async(client, message, args) => {

        if(args[0] === "lang"){
            const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Current available languages")
            .setDescription(`
            🇧🇬-Bulgarian use !t bg
            🇵🇱-Polish use !t pl
            🇳🇱-Dutch use !t nl
            🇩🇰-Danish use !t da
            🇩🇪-German use !t de
            🇮🇹-Italian use !t it
            🇷🇺-Russian use !t ru
            🇪🇸-Spanish use !t es
            🇹🇷-Turkish use !t tr
            🇫🇷-French use !t fr`)
            .setTimestamp()

           return message.channel.send(embed)
        }

        if(args[0] === "bg"){
        translate(args.slice(1).join(" "), {from: "auto", to: "bg"}).then(res => {
            
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("🇧🇬")
            .setDescription(`Your translated phrase: ${res.text}`)
            .setFooter("Translated to Bulgarian | For a list on languages do !t lang")
            .setTimestamp()

            message.channel.send(embed)
           return 
            
        })

    }

        if(args[0] === 'pl'){
            translate(args.slice(1).join(" "), {from: "auto", to: "pl"}).then(res => {
            
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🇵🇱")
                .setDescription(`Your translated phrase: ${res.text}`)
                .setFooter("Translated to Polish | For a list on languages do !t lang")
                .setTimestamp()
    
            message.channel.send(embed)
               return 
                
            })
        }

        if(args[0] === 'nl'){
            translate(args.slice(1).join(" "), {from: "auto", to: "nl"}).then(res => {
            
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🇳🇱")
                .setDescription(`Your translated phrase: ${res.text}`)
                .setFooter("Translated to Dutch | For a list on languages do !t lang")
                .setTimestamp()
    
            message.channel.send(embed)
              return  
                
            })
        }

        if(args[0] === 'da'){
            translate(args.slice(1).join(" "), {from: "auto", to: "da"}).then(res => {
            
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🇩🇰")
                .setDescription(`Your translated phrase: ${res.text}`)
                .setFooter("Translated to Danish | For a list on languages do !t lang")
                .setTimestamp()
    
                message.channel.send(embed)
               return 
                
            })
        }

        if(args[0] === 'de'){
            translate(args.slice(1).join(" "), {from: "auto", to: "de"}).then(res => {
            
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🇩🇪")
                .setDescription(`Your translated phrase: ${res.text}`)
                .setFooter("Translated to German | For a list on languages do !t lang")
                .setTimestamp()
    
                message.channel.send(embed)
               return 
                
            })
        }

        if(args[0] === 'it'){
            translate(args.slice(1).join(" "), {from: "auto", to: "it"}).then(res => {
            
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🇮🇹")
                .setDescription(`Your translated phrase: ${res.text}`)
                .setFooter("Translated to Italian | For a list on languages do !t lang")
                .setTimestamp()
    
                message.channel.send(embed)
               return 
                
            })
        }

        if(args[0] === 'ru'){
            translate(args.slice(1).join(" "), {from: "auto", to: "ru"}).then(res => {
            
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🇷🇺")
                .setDescription(`Your translated phrase: ${res.text}`)
                .setFooter("Translated to Russian | For a list on languages do !t lang")
                .setTimestamp()
    
                message.channel.send(embed)
               return 
                
            })
        }

        if(args[0] === 'es'){
            translate(args.slice(1).join(" "), {from: "auto", to: "es"}).then(res => {
            
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🇪🇸")
                .setDescription(`Your translated phrase: ${res.text}`)
                .setFooter("Translated to Spanish | For a list on languages do !t lang")
                .setTimestamp()
    
                message.channel.send(embed)
               return 
                
            })
        }

        if(args[0] === 'tr'){
            translate(args.slice(1).join(" "), {from: "auto", to: "tr"}).then(res => {
            
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🇹🇷")
                .setDescription(`Your translated phrase: ${res.text}`)
                .setFooter("Translated to Turkish | For a list on languages do !t lang")
                .setTimestamp()
    
                message.channel.send(embed)
               return 
                
            })
        }

        if(args[0] === 'fr'){
            translate(args.slice(1).join(" "), {from: "auto", to: "fr"}).then(res => {
            
                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🇫🇷")
                .setDescription(`Your translated phrase: ${res.text}`)
                .setFooter("Translated to French | For a list on languages do !t lang")
                .setTimestamp()
    
                message.channel.send(embed)
               return 
                
            })
        }


  }
}