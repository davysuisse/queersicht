# Queersicht application

This is a project for a film festival in Bern/Switzerland. 

The different plugins used for the development are the followings:
- Node : https://nodejs.org/en/
- Cordova : https://cordova.apache.org/
- Gulp : http://gulpjs.com/

# Installation instructions

First make sure these component are globally installed, by running:

    npm install -g gulp
    npm install -g cordova
    npm install -g phonegap

After cloning the project, run the following commands:

    npm install
    gulp
    gulp dev

This will start the server, the application should be available at the following url:

    http://localhost:8000 // Application
    http://localhost:8888 // Jasmine Test

To encapsulate the application in a android package (.apk)
    cordova build android

# Features in modern releases
No release
