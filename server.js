const app = require('./app');
const {appconfig} = require('./package');

var ports = process.env.PORT || 8800;

app.listen(appconfig.port, function() {
    console.log("Images server running on http://localhost:" + ports);
});