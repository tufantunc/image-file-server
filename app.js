var express = require('express');
var app = express();

const generateOptionsFromUrl = require('./components/generate-options-from-url');

const resizeImage = require('./components/resize-image');

app.all('*', function(req, res, next) {
    console.log(req.url);
    var parsedUrl = req.url.split('/');

    var options;
    options = generateOptionsFromUrl(parsedUrl, res, __dirname);

    res.type(`image/${options.format}`);

    resizeImage(options.path, options.format, options.size.width, options.size.height, options.quality, res).pipe(res);
});

module.exports = app;