const Telegraf = require('telegraf');

// Instancia de un bot
const bot = new Telegraf('1076489578:AAFrESPGy2mlrEgI50rnszaERWteBQhtz0I');


bot.start( (ctx) => {
    ctx.reply('Welcome');
});

bot.launch();