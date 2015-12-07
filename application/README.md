# Queersicht application

This is a project for a film festival in Bern/Switzerland. (http://queersicht.ch/)

The different plugins used for the development are the followings:
- Node : https://nodejs.org/en/
- Cordova : https://cordova.apache.org/
- Gulp : http://gulpjs.com/
- Phonegap : http://phonegap.com/

# Installation instructions

First make sure these components are globally installed, by running:

    npm install -g gulp
    npm install -g phonegap
    npm install -g cordova
    
    cordova platform add android

After cloning the project, run the following commands:

    npm install --save-dev // Install all the dependencies
    gulp // Start compiling and running server

This will start the server, the application should be available at the following url:

    http://localhost:8000 // Application
    http://localhost:8888 // Jasmine Test

To encapsulate the application in a android package (.apk):

    cordova build android
    
