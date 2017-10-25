const Discord = require("discord.js");

const TOKEN = "Bot token";
const PREFIX = "!"

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Idk"
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("I'am ready!")
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!")
            break;
        case "info":
            message.channel.sendMessage("I'am a super bot :))")
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read that");
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .addField("Title","description")
                .addField("Title1", "description")
                .addField("Title2", "description")
                .addField("Title3", "description")
                .setColor("0xFFFFF")
                .setThumbnail(message.author.avatarURL)
                .setFooter("Set here the embed footer")
            message.channel.sendMessage(embed);
            break;
        default:
            message.channel.sendMessage("Invalid command");
    }
});

bot.login(TOKEN);