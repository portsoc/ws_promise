'use strict';

var express = require('express'),
    app = express();

app.use('/', express.static('_00_commonerror', { extensions: ['html', 'js', 'json'] }));

app.listen(8080)
console.log("server started")
