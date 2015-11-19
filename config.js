module.exports = function (config) {

  // Output directory
  config.dest = 'www';

  // Inject cordova script into html
  config.cordova = true;

  // Development web server
  config.server.host = '0.0.0.0';
  config.server.port = '8000';
};