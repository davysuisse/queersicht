# Queersicht Server

This is the server containing the REST api (http://queersicht.ch/)

The different steps to do to be able to run the server are the followings:
- Node : https://nodejs.org/en/ // To launch the server.js
- Mysql : http://www.mysql.com // You need to install MySQL on your machine
- SQL Script : database/queersicht.sql // It will create a database and tables 

# Installation instructions

First make sure these components are globally installed, by running:

    npm install -g express

After cloning the project, run the following commands:

    npm install // Install all the dependencies
    node server.js // Start compiling and running server (In this file, you'll need to configure your MySQL configuration)

This will start the server, it should be available at the following url:

    http://localhost:8081 // Server
