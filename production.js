const express = require('express');
const path = require('path');
const app = express();
const ClientStatsPath = path.join(__dirname, './static/stats.json');
const ServerRendererPath = path.join(__dirname, './static/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

const API = require('./API/API.js');


app.use(ServerRenderer(Stats));


app.listen(3000,console.log('listening on port 3000'));

API(express, 3001);