class HelpCommand {
  constructor() {
    this.codeBlockFirst = '```md\n';
    this.codeBlockLast = '```';
  }
  
  run(msg, Yumi) {
    const embed = {
       title: 'YumiBoat v4.1 Help',
       fields: [
         {
            name: `:gear: — Utility`,
            value: `${this.codeBlockFirst}[ !y.help ]( This Message )\n[ !y.botinfo {@mention | id} ]( Gives some info from a bot on discordbots.org )\n[ !y.github {user/repo} ]( Search a github repository! )${this.codeBlockLast}`,
            inline: false
         },
         {
           name: `:rofl: — Fun`,
           value: `${this.codeBlockFirst}[ !y.ascii {text} ]( Make a banner. {Only 0-9 characters} )\n[ !y.neko ]( Get a beautiful neko! ^~^ )\n[ !y.slots ]( Play a game of slots! )${this.codeBlockLast}`,
           inline: false
         },
         {
           name: `:hammer_pick: — Developer`,
           value: `${this.codeBlockFirst}[ !y.dev {eval | exec | git} {pull} ]( Developer commands! {Used by owners!} )${this.codeBlockLast}`,
           inline: false
         },
         {
            name: `:video_game: — Video Games`,
            value: `${this.codeBlockFirst}[ !y.minecraft {server | user} {ip:port | uuid / username} ]( Search the Minecraft API! )\n[ !y.rl {search} {steam | xbox | steam} ]( Search the RocketLeagueAPI to search your stats! )${this.codeBlockLast}`.
            inline: false
         }
       ]
    };
    
    Yumi.create(msg, embed);
  }
}

module.exports = HelpCommand;