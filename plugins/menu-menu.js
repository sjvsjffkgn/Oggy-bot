import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(global.img)).buffer(), sourceUrl: redesMenu.getRandom() }}}


let menu = `⌜🖤 *${wm}* 🖤⌟  
*╔══════════════*
*╟❧☯︎𝐇𝐎𝐋𝐀➪ ${taguser}👋*
*╟ ╸╸╸╸╸╸╸╸╸*
*╟❧ ➪Creador𖠌: 𝐓𝐄 𝐀𝐌 𝐆𝐀𝐓𝐎 𝐌𝐎𝐃𝐒 𝐘𝐓*
*╟*
*╟*  °⌜    ⌨  ︎INFO  ⌨︎  ︎  ⌟°
*╟❧🂱➪Tiempos activos ⌨︎:* *${uptime}*
*╟❧⍟➪Usuarios⌨︎:* *${Object.keys(global.db.data.users).length}*
*╟❧☯︎➪Registrado⌨︎:* ${rtotalreg} de ${totalreg}* ${(conn.user.jid == global.conn.user.jid ? '' : `\n□ *Soy un sub bot del:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}
*╟ ╸╸╸╸╸╸╸╸╸*
*╟❧👉CANAL DE YT+*
*╟youtube.com/@teamgatoffoficial?si=WCxdP9-eY189JNYd*
*╚══════════════*
◉ *INFO DEL USUARIO*
╭──────────────
├⫹⫺ *🙌 Registrado:* ${user.registered === true ? '✅' : '❌ _#verificar_'}
├⫹⫺ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : '❌ _#pase premium_'}
├⫹⫺ *🔰 Mi estado:* ${typeof user.miestado !== 'string' ? '_#miestado/Estado no asignado_' : '_Me siento ' + user.miestado + '_'}
├⫹⫺ *🎖️ Nivel:* ${level}
├⫹⫺ *💎 Diamantes:* ${limit}
├⫹⫺ *👾 catCoins:* ${money}
├⫹⫺ *🪙 Tokens:* ${joincount}
├⫹⫺ *🧰 Experiencia:* ${exp}
├⫹⫺ *⚓ Rango:* ${role}
╰────────────── 
${readMore}
┌───⊷ *INFO DEL BOT*
┊┇_${usedPrefix}infobot_
┊┇_${usedPrefix}grupos_
┊┇_${usedPrefix}instalarbot_
┊┇_${usedPrefix}menu2_
┊┇_${usedPrefix}estado_
┊┇_${usedPrefix}sc_
┊┇_${usedPrefix}ping_
┊┇_Bot_
┊┇_¿Qué es un Bot?_
┊┇_Términos y condiciones_
└────────────

┌───⊷ *SER PREMIUM*
┆ *Convierte en un(a)*
┆ *Usuario(a) Premium!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🎟️ _${usedPrefix}listapremium_
┆🎟️ _${usedPrefix}pase premium_
┆🎟️ _${usedPrefix}pass premium_
└─────────────

┌───⊷ *DESCARGAS*
┆📥 _${usedPrefix}play *<texto>*_
┆📥 _${usedPrefix}play.1 *<texto>*_
┆📥 _${usedPrefix}play.2 *<texto>*_
┆📥 _${usedPrefix}playdoc *<texto>*_
┆📥 _${usedPrefix}playlist *<texto>*_
┆📥 _${usedPrefix}playlist2 *<texto>*_
┆📥 _${usedPrefix}spotify *<texto>*_
┆📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┆📥 _${usedPrefix}instagram *<enlace / link / url>*_
┆📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┆📥 _${usedPrefix}instagram *<enlace / link / url>*_
┆📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┆📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┆📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┆📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┆📥 _${usedPrefix}twitter *<enlace / link / url>*_
┆📥 _${usedPrefix}fb *<enlace / link / url>*_
┆📥 _${usedPrefix}fb2 *<enlace / link / url>*_
┆📥 _${usedPrefix}fb3 *<enlace / link / url>*_
┆📥 _${usedPrefix}fb4 *<enlace / link / url>*_
┆📥 _${usedPrefix}fb5 *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┆📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
┆📥 _${usedPrefix}stickerly *<texto>*_
┆📥 _${usedPrefix}ringtone *<texto>*_
┆📥 _${usedPrefix}soundcloud *<texto>*_
┆📥 _${usedPrefix}imagen *<texto>*_
┆📥 _${usedPrefix}pinteret *<texto>*_
┆📥 _${usedPrefix}wallpaper *<texto>*_
┆📥 _${usedPrefix}wallpaper2 *<texto>*_
┆📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┆📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┆📥 _${usedPrefix}igstory *<nombre de usuario>*_
┆📥 _${usedPrefix}tiktokstalk *<username>*_
└─────────────

┌───⊷ *CONVERTIDORES*
┆ *Convierte sticker en imagen!!*
┆ *Crea enlace de archivos!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🧧 _${usedPrefix}togifaud *<video>*_
┆🧧 _${usedPrefix}robar *texto*
┆🧧 _${usedPrefix}wm *texto*
┆🧧 _${usedPrefix}toimg *<sticker>*_
┆🧧 _${usedPrefix}tomp3 *<video>*_
┆🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┆🧧 _${usedPrefix}toptt *<video / audio>*_
┆🧧 _${usedPrefix}tovideo *<sticker>*_
┆🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┆🧧 _${usedPrefix}tts es *<texto>*_
└─────────────

┌───⊷ *FRASES Y TEXTOS*
┆ *Enamora a tu enamorada/o*
┆ *con esta frases/piropo uwu*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 🥀 _${usedPrefix}piropo_
┆🥀 _${usedPrefix}consejo_
┆🥀 _${usedPrefix}fraseromantica_
└─────────────

┌───⊷ *COMANDO +18*
┆ *Usar bajo su responsabilidad*
┆ *Nota: no sea pajero*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🔞 _${usedPrefix}hornymenu_
└─────────────

┌───⊷ *EFECTOS PARA NOTAS DE VOZ/AUDIOS*
┆ *Realiza Modificaciones*
┆ *al Audio o Nota de Voz!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🎤 _${usedPrefix}audioefectomenu_
└─────────────

┌───⊷ *AUDIOS*
┆ *Visita el Menú de Audios!!*
┆ *Disfruta de una Gran Variedad*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🔊 _${usedPrefix}menu2_
┆🔊 _${usedPrefix}audios_
└────────────

┌───⊷ *BUSCADORES*
┆ *Busca lo que quieres con el Bot!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🔍 _${usedPrefix}stickersearch *<texto>*_
┆🔍 _${usedPrefix}stickersearch2 *<texto>*_
┆🔍 _${usedPrefix}xnxxsearch *<texto>*_
┆🔍 _${usedPrefix}animeinfo *<texto>*_
┆🔍 _${usedPrefix}google *<texto>*_
┆🔍 _${usedPrefix}letra *<texto>*_
┆🔍 _${usedPrefix}wikipedia *<texto>*_
┆🔍 _${usedPrefix}ytsearch *<texto>*_
┆🔍 _${usedPrefix}apkdone *<texto>*_
┆🔍 _${usedPrefix}apkgoogle *<texto>*_
┆🔍 _${usedPrefix}apkmody *<texto>*
┆🔍 _${usedPrefix}uapkpro *<texto>*_
┆🔍 _${usedPrefix}playstore *<texto>*_
└─────────────

┌───⊷ *RPG - LIMITES - ECONÓMIAS*
┆ *Compra, Adquiere Recuersos*
┆ *Mejora Tú Nivel y Rango!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆💵 _${usedPrefix}verificar_
┆💵 _${usedPrefix}unreg *<numero de serie>*_
┆💵 _${usedPrefix}claim_
┆💵 _${usedPrefix}lb_
┆💵 _${usedPrefix}levelup_
┆💵 _${usedPrefix}perfil_
┆💵 _${usedPrefix}minar_
┆💵 _${usedPrefix}buy_
┆💵 _${usedPrefix}balance_
┆💵 _${usedPrefix}myns_
┆💵 _${usedPrefix}work_
┆💵 _${usedPrefix}buyall_
┆💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
└─────────────

┌───⊷ *TOP EN 𝙏𝙃𝙀-𝙏𝙀𝘼𝙈-𝙂𝘼𝙏𝙊 𝘽𝙊𝙏*
┆ *Averigua en que Top te encuentras!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🏆➺ _${usedPrefix}top | lb | leaderboard_
└─────────────

┌───⊷ *STICKERS*
┆ *Realiza stickers o crea*
┆ *stickers con filtros!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┆👽 _${usedPrefix}sticker *<enlace / link / url>*_
┆👽 _${usedPrefix}s *<responder a imagen o video>*_
┆👽 _${usedPrefix}s *<enlace / link / url>*_
┆👽 _${usedPrefix}sfull *<imagen o video>*_
┆👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┆👽 _${usedPrefix}scircle *<imagen>*_
┆👽 _${usedPrefix}sremovebg *<imagen>*_
┆👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┆👽 _${usedPrefix}attp *<texto>*_
┆👽 _${usedPrefix}attp2 *<texto>*_
┆👽 _${usedPrefix}attp3 *<texto>*_
┆👽 _${usedPrefix}ttp *<texto>*_
┆👽 _${usedPrefix}ttp2 *<texto>*_
┆👽 _${usedPrefix}ttp3 *<texto>*_
┆👽 _${usedPrefix}ttp4 *<texto>*_
┆👽 _${usedPrefix}ttp5 *<texto>*_
┆👽 _${usedPrefix}pat *<@tag>*_
┆👽 _${usedPrefix}slap *<@tag>*_
┆👽 _${usedPrefix}kiss *<@tag>*_
┆👽 _${usedPrefix}dado_
┆👽 _${usedPrefix}wm *<packname> <author>*_
┆👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┆👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *STICKERS DINÁMICOS*
┆ *Realiza acciones con Stickers*
┆ *Etiquetando a alguien!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆⛱️ _${usedPrefix}palmaditas | pat *@tag*_
┆⛱️ _${usedPrefix}bofetada | slap *@tag*_
┆⛱️ _${usedPrefix}golpear *@tag*_
┆⛱️ _${usedPrefix}besar | kiss *@tag*_
┆⛱️ _${usedPrefix}alimentar | food *@tag*
└─────────────

┌───⊷ *PROPIETARIO DEL BOT*
┆ *Comando exclusivo para Propietario/owner del bot*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆👑 > *<funcion>*
┆👑 => *<funcion>*
┆👑 $ *<funcion>*
┆👑 _${usedPrefix}setprefix *<prefijo>*_
┆👑 _${usedPrefix}resetprefix_
┆👑 _${usedPrefix}autoadmin_
┆👑 _${usedPrefix}leavegc_
┆👑 _${usedPrefix}cajafuerte_
┆👑 _${usedPrefix}blocklist_
┆👑 _${usedPrefix}block *<@tag / numero>*_
┆👑 _${usedPrefix}unblock *<@tag / numero>*_
┆👑 _${usedPrefix}enable *restrict*_
┆👑 _${usedPrefix}disable *restrict*_
┆👑 _${usedPrefix}enable *autoread*_
┆👑 _${usedPrefix}disable *autoread*_
┆👑 _${usedPrefix}enable *public*_
┆👑 _${usedPrefix}disable *public*_
┆👑 _${usedPrefix}enable *pconly*_
┆👑 _${usedPrefix}disable *pconly*_
┆👑 _${usedPrefix}enable *gconly*_
┆👑 _${usedPrefix}disable *gconly*_
┆👑 _${usedPrefix}enable *anticall*_
┆👑 _${usedPrefix}disable *anticall*_
┆👑 _${usedPrefix}enable *antiprivado*_
┆👑 _${usedPrefix}disable *antiprivado*_
┆👑 _${usedPrefix}msg *<texto>*_
┆👑 _${usedPrefix}banchat_
┆👑 _${usedPrefix}unbanchat_
┆👑 _${usedPrefix}banuser *<@tag>*_
┆👑 _${usedPrefix}unbanuser *<@tag>*_
┆👑 _${usedPrefix}dardiamantes *<@tag>*_
┆👑 _${usedPrefix}añadirxp *<@tag>*_
┆👑 _${usedPrefix}banuser *<@tag>*_
┆👑 _${usedPrefix}bc *<texto>*_
┆👑 _${usedPrefix}bcchats *<texto>*_
┆👑 _${usedPrefix}bcgc *<texto>*_
┆👑 _${usedPrefix}bcbot *<texto>*_
┆👑 _${usedPrefix}cleartpm_
┆👑 _${usedPrefix}restart_
┆👑 _${usedPrefix}update_
┆👑 _${usedPrefix}banlist_
┆👑 _${usedPrefix}addprem *<@tag>*_
┆👑 _${usedPrefix}delprem *<@tag>*_
┆👑 _${usedPrefix}listprem_
┆👑 _${usedPrefix}listcmd_
┆👑 _${usedPrefix}setppbot *<responder a imagen>*_
┆👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┆ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
└───────────────────`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
