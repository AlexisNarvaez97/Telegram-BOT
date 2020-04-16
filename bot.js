const Telegraf = require("telegraf");

// Instancia de un bot
const bot = new Telegraf("1076489578:AAFrESPGy2mlrEgI50rnszaERWteBQhtz0I");

bot.start((ctx) => {
  console.log(ctx.from);
  console.log(ctx.chat);
  console.log(ctx.message);
  console.log(ctx.updateSubTypes);
  ctx.reply(`Bienvenido ${ctx.from.first_name} ${ctx.from.last_name}`);
});

bot.help((ctx) => {
  ctx.reply("Help!!");
});

bot.settings((ctx) => {
  ctx.reply("Settings");
});

bot.command(['mycommand', 'Mycommand'], (ctx) => {
  ctx.reply('Mi comando perro!!');
});

bot.hears('computer', ctx => {
  ctx.reply('Hey maldito perro uwu');
});

// bot.on('text', ctx => {
//   ctx.reply('Estas texteando');
// });

bot.mention('BotFather', (ctx) => {
  ctx.reply('Tu mencionaste alguien uwu')
})

bot.phone('+52 923 115 52 64', ctx => {
  ctx.reply('Este es mi numero uwu')
});

bot.hashtag('programming', ctx => {
  ctx.reply('hashtag!!!')
});

bot.launch();