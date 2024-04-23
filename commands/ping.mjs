export default {
    info: "Bot gecikmesini gösterir.",
    callback: (message, ...args) => {
        message.reply(`🏓 Pong! Bot Gecikmesi **${message.client.ws.ping}** MİLİSaniye`);
    }
}