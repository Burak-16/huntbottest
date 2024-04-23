export default {
    info: "Botu devredışı bırakır / kapatır.",
    callback: (message, ...args) => {
        message.reply("Bot Kapatılıyor. /İtemSatış & FantasticShop Discord.gg/Uranyum")
        process.kill(process.pid, "SIGINT");
    }
}