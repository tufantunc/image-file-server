var sharp = require('sharp');
var fs = require('fs');
module.exports = (path, format, width, height, quality, res) => {
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
        transform = transform.resize(width, height, {fit: "cover"});
    }

    return readStream.pipe(transform);
};