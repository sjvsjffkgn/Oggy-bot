let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
/*
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, ``, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  */
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { 
text: `*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇ 💖 ʜᴏʟᴀ ${name} 👋*
*┇ ᴛᴇ ᴀɢʀᴀᴅᴇᴢᴄᴏ, ᴘᴏʀ ᴀʏᴜᴅᴀʀᴍᴇ ʏ ᴘᴏʀ ᴜsᴀʀ ᴍɪ ʙᴏᴛ*
*┇ ɢʀᴀᴄɪᴀs, ʏᴏ ɴᴏ ᴘɪᴅᴏ ᴅɪɴᴇʀᴏ.*
*┇ ɴᴏ ᴛᴇɴɢᴏ ᴘᴀʏᴘᴀʟ. sᴏᴍᴏs ʜᴜᴍɪʟᴅᴇs,*
*┇ ᴘᴇʀᴏ sɪ ǫᴜɪᴇʀᴇs ᴘᴜᴇᴅᴇ ᴀᴘᴏʏᴀʀ ᴀʟ ʙᴏᴛ.*
*┇ sᴜsᴄʀɪʙɪᴇɴᴅᴏsᴇ ᴀʟ ᴄᴀɴᴀʟ ᴏғɪᴄɪᴀʟ ᴅᴇʟ ʙᴏᴛ*
*┇ ᴘᴀʀᴀ ǫᴜᴇ ᴄᴀᴅᴀ ᴠᴇᴢ sᴏᴍᴏs ᴍᴀs ᴇʟ ʟᴀ ғᴀᴍɪʟɪᴀs ʟᴏʟɪʙᴏᴛ*
*┇ ʏᴀ ᴄᴏɴ ᴇsᴏ sᴏʏ ғᴇʟɪᴢ.😄*
*┇ ʏ ᴀᴘᴏʏᴀʀʟᴏs ᴄᴏɴ ᴜɴᴀ 🌟 ᴇʟ ɢɪᴛʜᴜʙ ᴏғɪᴄɪᴀʟ ᴅᴇʟ ʙᴏᴛ*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *ʏᴏᴜᴛᴜʙᴇ | sᴜsᴄʀɪʙɪʀᴛᴇ 🔕*
*┃*  *${yt}*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  *ɢɪᴛʜᴜʙ 🌟*
*┃*  *${md}*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  *ᴛɪᴋᴛᴏᴋ* 
*┃*  *${ig}*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*   *ғᴀᴄᴇʙᴏᴏᴋ*
*┃* *https://facebook.com/groups/872989990425789/*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  *ᴀɢʀᴀᴄɪᴍɪᴇɴᴛᴏs:*
*┃* *ᴛʜᴇ-ʟᴏʟɪʙᴏᴛ-ᴍᴅ ᴛɪᴇɴᴇ ғᴜɴᴄɪᴏɴᴇs ǫᴜᴇ*
*┃* *ᴘᴇʀᴛᴇɴᴇᴢᴄᴀɴ ᴀ ʟᴀs sɪɢᴜᴇɴᴛᴇs ᴇᴍᴘʀᴇsᴀs*
*┃* *ᴏʀɢᴀɴɪᴢᴀᴄɪᴏɴ(ᴇs) ᴘᴇʀsᴏɴᴀ(s):*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *ᴛʜᴇᴍʏsᴛɪᴄ-ʙᴏᴛ-ᴍᴅ*
*┃* *https://github.com/BrunoSobrino*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *ɢᴀᴛᴀʙᴏᴛ-ᴍᴅ*
*┃* *https://github.com/GataNina-Li/GataBot-MD*
*┃* *ɢʀᴀᴄɪᴀs!!*
*┗ ┅ ━━━━━━━━━ ┅ ━*`, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen3, 
"title": 'ᴾᵘᵉᵈᵉ ᵃᵖᵒʸᵃʳᵐᵉ ᶜᵒᵐᵖᵃʳᵗᶦᵉⁿᵈᵒ ᵉˢᵗᵒˢ ʸ ˢᶦ ᵗᵉ ᵃᵍʳᵃᵈᵃ ᵉˡ ᴮᵒᵗ ʳᵉᵍᵃˡᵃʳᵐᵉ ᵘⁿᵃ ⭐ ᴳʳᵃᶜᶦᵃˢ', 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": md, 
"sourceUrl": md, 
}}}, { quoted: m })
// await conn.sendButton(m.chat, `a`, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
/*await conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', 'ɢɪᴛʜᴜʙ', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}*/
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating|creditos$/i
handler.exp = 80
handler.register = true
export default handler
