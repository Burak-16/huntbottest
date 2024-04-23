import { aCheck } from "../lib/SelfbotWorker.mjs"
export default {
    info: "İşletimi yeniden yükler.",
    callback: (message, ...args) => {
        try {
            aCheck(true);
            message.reply("İşletim başarıyla yenilendi.")
        } catch (error) {
            message.reply("İşletimi yenileme başarısız oldu.")
        }
    }
}