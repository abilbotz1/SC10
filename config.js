const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

//api
global.xteam = 'apivproject'
global.lolhuman = 'yourkey'

// Other
global.owner = ['6282146218274']
global.premium = ['6282146218274']
global.ownername = 'RiellGanzz'
global.botname = 'Khurushi•MD'
global.packname = '© Khurushi-Md'
global.gc = 'https://chat.whatsapp.com/GItYfXre9JbBOipYTgoMnY'
global.linkyt = 'https://youtube.com/channel/UCOAcuUV1y9wKV8R2xMsOMmg'
global.linkgc = 'https://chat.whatsapp.com/GItYfXre9JbBOipYTgoMnY'
global.limitawal = '10'
global.author = '@Rielganzz\n@KhurushiBot'
global.sessionName = 'sessionya'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://telegra.ph/file/83e14fc5fcf49d30ad041.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
