class Logger {
  /**
    * Error loggin.
    * @type {String[]} message - Message to pop.
    **/
    
    static error(message) {
      console.error('[BOT]: ' + message);
    }
    
  /**
    * Error loggin.
    * @type {String[]} message - Message to pop.
    **/
    
    static notify(message) {
      console.error('[BOT]: ' + message);
    }
}