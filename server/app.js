import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.js';
import expressConfig from './framework/webserver/express.js';
import serverConfig from './framework/webserver/server.js';
import mongoDbConnection from './framework/database/mongoDB/connection.js'
// import http from 'http';


const app = express();
// const server = http.createServer(app);

// server configuration and start
serverConfig(app).startServer();



// express.js configuration (middlewares etc.)
expressConfig(app);


// DB configuration and connection create

mongoDbConnection(mongoose,config, {
    autoIndex: false,
  }).connectToMongo();


