const express = require('express');
const compress = require("./lib/compress");

const app = express();
const config = require('./config.json')

app.use('/api', require('./src/challenge'));

app.listen(config.web.port);
