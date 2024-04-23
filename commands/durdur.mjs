import { global } from "../index.mjs"
export default {
    info: "Botun çalışmasını durdurur.",
    callback: (message, ...args) => {
        if(global.captchaDetected) {
            if(global.paused) return message.reply("Bot zaten durdurulmuş durumda.")
            else return message.reply("**EYLEM GEREKLİ!** Botu duraklatmadan önce captcha görselini çözmelisiniz. /İtemSatış & FantasticShop Discord.gg/Uranyum")
        }
        else {
            global.captchaDetected = true
            global.paused = true
            message.reply("Bot başarıyla durduruldu. /İtemSatış & FantasticShop Discord.gg/Uranyum")
        }
    }
}