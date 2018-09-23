var { noResizeFolderName, noresizefor } = require('../package').appconfig;
const path = require('path');
module.exports = (parsedUrl, res, dirname) => {
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

        options.path = needResize ? dirname + "/" + parsedUrl[2] : dirname + "/" + noresizefor; //default path base
        var startFrom = needResize ? 5 : 3;
        for(i = startFrom; i<parsedUrl.length; i++) {
            options.path += "/" + parsedUrl[i];
        }
        options.path = path.normalize(options.path);

        var formatSplit = options.imageName.split('.');
        options.format = formatSplit[formatSplit.length-1];

        return options;
    } catch (e) {
        console.log(e);
        res.status(500);
        res.send("Hatalı url!");
    }
}