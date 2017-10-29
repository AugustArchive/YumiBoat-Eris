const YumiBoat = require('./YumiBoat');
YumiBoat.config = require('./lib/config.json');
const Yumi = new YumiBoat(YumiBoat.config.api_keys.Discord.login);
//const games = require('./lib/games.json');
YumiBoat.Log = console.log;

Yumi.bot.on('ready', () =>
{
    Yumi.bot.editStatus(null,
    {
       name: `yumibot.party | !y.help`,
       type: 0
    });
    Yumi.bot.serverCount();
    YumiBoat.Log.info(`[BOT]: YumiBoat is online.`);
});

Yumi.bot.on('messageCreate', (msg) =>
{
   if (!msg.content.startsWith(YumiBoat.config.prefix) || msg.author.bot) return;

   const command = msg.content.split(" ").shift().slice(YumiBoat.config.prefix.length);
   Yumi.handle(msg, command);
});

Yumi.start();