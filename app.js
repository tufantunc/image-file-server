var express = require('express');
var sharp = require('sharp');
var fs = require('fs');
var app = express();
var argv = require('yargs').argv;
var noResizeFolderName = "statik";

function generateOptionsFromUrl(parsedUrl, res) {
    try {
        var needResize = parsedUrl[2] !== noResizeFolderName;
        var options = {
            baseFolder: parsedUrl[2],
            quality: needResize ? parseInt(parsedUrl[3]) : 100,
            size: {
                width: needResize ? parseInt(parsedUrl[4].split('x')[0]) : 0,
                height: needResize ? parseInt(parsedUrl[4].split('x')[1]) : 0
            },
            path: '',
            imageName: parsedUrl[parsedUrl.length-1],
            format: ''
        }

        options.path = needResize ? __dirname + "/" + parsedUrl[2] : __dirname + "/" + argv.noresizefor; //default path base

        var startFrom = needResize ? 5 : 3;
        for(i = startFrom; i<parsedUrl.length; i++) {
            options.path += "/" + parsedUrl[i];
        }

        var formatSplit = options.imageName.split('.');
        options.format = formatSplit[formatSplit.length-1];

        return options;
    } catch (e) {
        console.log(e);
        res.status(500);
        res.send("Hatalı url!");
    }
}

function resizeImage(path, format, width, height, quality, res) {
    const readStream = fs.createReadStream(path).on('error', function(err) {
        console.log(err);
        res.status(404);
        res.send("İmaj bulunamadı!");
    });
    let transform = sharp();

    if (format) {
        transform = transform.toFormat(format);
        if(format === 'jpg') {
            transform.jpeg({
                quality: quality
            });
        }
    }

    if (width || height) {
        transform = transform.resize(width, height).crop(sharp.strategy.entropy);
    }

    return readStream.pipe(transform);
};

app.all('*', function(err, req, res, next) {
    var parsedUrl = req.url.split('/');

    var options;
    options = generateOptionsFromUrl(parsedUrl, res);

    res.type(`image/${options.format}`);

    resizeImage(options.path, options.format, options.size.width, options.size.height, options.quality, res).pipe(res);
});

var ports = 8800;

app.listen(ports, function() {
    console.log("Images server running on http://localhost:" + ports);
});