import { global } from "../index.mjs"
import { main } from "../lib/SelfbotWorker.mjs"
export default {
    info: "Botun çalışmasını başlatır.",
    callback: (message, ...args) => {
        if(global.captchaDetected) {
            if(global.paused) {
                global.captchaDetected = false
                global.paused = false
                message.reply("Bot başarıyla çalıştırıldı. /İtemSatış & FantasticShop")
                main();
            }
            else return message.reply("**EYLEM GEREKLİ!** Botu duraklatmadan önce captcha görselini çözmelisiniz. /İtemSatış & FantasticShop")
        } else return message.reply("Bot zaten çalışır durumda. /İtemSatış & FantasticShop")
    }
}