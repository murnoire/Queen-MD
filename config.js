/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '805a6c3fa9',
}
////////////////////////////////////////////////////|:|             OWNER DETAILS             |:|//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.session = process.env.SESSION_ID || 'PUT HERE',
global.ownername = process.env.OWNER_NAME === undefined ? "Djalega++" : process.env.OWNER_NAME
let fake = process.env.OWNER_NUMBER === undefined ? '94775200935' : process.env.OWNER_NUMBER
global.owner = [`${fake}`]
global.ownernumber = [`${fake}`]
global.premium = [`${fake}`]
global.anticall = process.env.ANTICALL === undefined ? 'false' : process.env.ANTICALL
global.packname = process.env.PACK_NAME === undefined ? 'Queen-MD' : process.env.PACK_NAME
global.author = process.env.STICKER_AUTHOR_NAME === undefined ? 'DarkWinzo' : process.env.STICKER_AUTHOR_NAME
global.pmblock = process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK
global.chatbot_pm = process.env.PM_CHATBOT === undefined ? 'false' : process.env.PM_CHATBOT
global.chatbot_group = process.env.GROUP_CHATBOT === undefined ? 'false' : process.env.GROUP_CHATBOT

/////////////////////////////////////////////////////////////////||SESSION ID METHOD||///////////////////////////////////////////////////////////////////////
global.sessionconvert = ['true']                           //This is session id method.....//Don't Change
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.Botname = 'D'+'j'+'a'+'l'+'e'g'a'+'+'+'+'
global.prefa = ['😎']
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.mess = {
        wait: '*ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ...⏳️*',
        owner: '*🔰️ seul le boss Djalega++ peut utiliser cette ᴄᴏᴍᴍᴀɴᴅe*',
        group: '*🔰️ cette ᴄᴏᴍᴍᴀɴᴅe est uniquement pour les *ɢʀᴏᴜᴘeꜱ*  !*',
        admin: '*🔰️ cette commande est réservée aux  ᴀᴅᴍɪɴ !* by Djalega++',
        botadmin: '*desolé😔️, je peux pas exécuter cette ᴄᴏᴍᴍᴀɴᴅe tant que je suis pas *ᴀᴅᴍɪɴ* du ɢʀᴏᴜᴘe.* 😌 Djalega++',
        botAdmin: '* desolé😔️, je peux pas exécuter cette ᴄᴏᴍᴍᴀɴᴅe tant que je suis pas *ᴀᴅᴍɪɴ* du ɢʀᴏᴜᴘe.* 😌 Djalega++.',
        banned: '*❌️ tu es  *ʙᴀɴɴi* d utilisation du bot !*',
        bangc: '*❌️ ce ɢʀᴏᴜᴘe est ʙᴀɴɴi d utilisation du bot !*',
}
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ ᴜᴘᴅᴀᴛᴇ config.js"))
	delete require.cache[file]
	require(file)
})
