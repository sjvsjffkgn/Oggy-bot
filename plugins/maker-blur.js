let handler = async (m, { conn, usedprefix }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/blur', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'hornycard.png', '✨ 𝑬𝒔𝒕𝒂 𝒍𝒊𝒔𝒕𝒐!!\n𝙏𝙃𝙀-𝙏𝙀𝘼𝙈-𝙂𝘼𝙏𝙊 𝘽𝙊𝙏', m)
}
handler.help = ['blur','difuminar2']
handler.tags = ['maker']
handler.command = /^(blur|difuminar2)$/i
export default handler
