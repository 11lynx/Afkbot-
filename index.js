const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Skibidi-7004.aternos.me',
  port: 18824,
  username: 'Slobot00'
});

bot.on('spawn', () => {
  console.log('Bot ist verbunden!');
});
