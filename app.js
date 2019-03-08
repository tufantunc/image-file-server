var express = require('express');
var app = express();

const generateOptionsFromUrl = require('./components/generate-options-from-url');

const resizeImage = require('./components/resize-image');

app.all('*', function(req, res, next) {
    if(req.url == '/') {
        res.send('Image file server');
    } else {
        var parsedUrl = req.url.split('/');
        if(parsedUrl.length > 5) {
            var options;
            options = generateOptionsFromUrl(parsedUrl, res, __dirname);

            res.type(`image/${options.format}`);

            resizeImage(options.path, options.format, options.size.width, options.size.height, options.quality, res).pipe(res);
        } else {
            res.status(404).send("Image not found!");
        }
    }
});

module.exports = app;