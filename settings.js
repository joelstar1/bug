//base by DGXeon (Xeon Bot Inc.)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "2349054039891,2347061138624"
global.ownername = "𝙹𝙾𝚁𝙳𝙰𝙽-𝙹𝙾𝙴𝙻𝚂𝚃𝙰𝚁"
global.ytname = "YT: 𝙹𝙾𝚁𝙳𝙰𝙽-𝙹𝙾𝙴𝙻𝚂𝚃𝙰𝚁"
global.socialm = "GitHub: @jamesxtreme"
global.location = "Lagos, Nigeria"

global.ownernumber = '2349054039891,2347061138624'  //creator number
global.ownername = '𝙹𝙾𝚁𝙳𝙰𝙽-𝙹𝙾𝙴𝙻𝚂𝚃𝙰𝚁' //owner name
global.botname = '𝙹𝙾𝚁𝙳𝙰𝙽-𝙹𝙾𝙴𝙻𝚂𝚃𝙰𝚁-😡' //name of the bot

//sticker details
global.packname = 'Joelstar'
global.author = 'Jordan'

//console view/theme
global.themeemoji = '🕷'
global.wm = "Xeon Bot Inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
