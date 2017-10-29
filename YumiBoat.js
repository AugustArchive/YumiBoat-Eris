const Eris = require('eris'),
      config = require('./lib/config.json'),
      snek = require('snekfetch'),
      hd = require('humanize-duration'),
      Logger = require('./lib/Logger');
      
class YumiBoat {
   constructor() {
     this.bot = new Eris(config.api_keys.Discord.login, {
        maxShards: config.api_keys.Discord.maxShards || 1
     });
     this._snek = snek;
     this._hd = hd;
     this._Logger = Logger;
     this.config = config;
   }
   
   serverCount() {
       this._snek.post(`https://discordbots.org/api/bots/${this.bot.user.id}/stats`)
           .set("Authorization", this.config.api_keys.oliyBots)
           .send({
             server_count: this.bot.guilds.size  
           })
           .then(this._Logger.info(`[discordbots.org]: Posted Stats! (Guilds: ${this.bot.guilds.size})`)
           .catch(async (e) => await this._Logger.error(`[discordbots.org]: A error has occured! [${err.message}:${err.code}`))
                 
       this._snek.post(`https://bots.discord.pw/api/bots/${this.bot.user.id}/stats`)
           .set("Authorization", this.config.api_keys.discordBoats)
           .send({
             server_count: this.bot.guilds.size  
           })
           .then(this._Logger.info(`[discordbots.org]: Posted Stats! (Guilds: ${this.bot.guilds.size})`)
           .catch(async (e) => await this._Logger.error(`[discordbots.org]: A error has occured! [${err.message}:${err.code}`))
   }

   start() {
     this._Logger.info("Launching YumiBoat....");
     this.bot.connect();
   }
   
   handle(msg, command) {
      const user = msg.mentions[0];
      const args = msg.content.split(" ");
      
      try {
         const commandFilePath = require(`./commands/${command}.js`),
               commandFilePath = new commandFilePath();
               
         commandFilePath.run(this.bot, this, msg, args, user);
      } catch(err) {
        this._Logger.error(err.stack);
      }
   }
   
   create(msg, content, options) {
      this.bot.createMessage(msg.channel.id, content, options);
   }
}

module.exports = YumiBoat;