const app = require('./app');
const {appconfig} = require('./package');

var ports = process.env.PORT || appconfig.port;

app.listen(ports, function() {
    console.log("Images server running on http://localhost:" + ports);
});