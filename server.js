var path = require("path"),  
// proxy = require('express-http-proxy'),
express = require("express");

var proxy = require('http-proxy-middleware');

var DIST_DIR = path.join(__dirname, "dist"),  
PORT = 5000,
app = express();

//Serving the files on the dist folder       // "express-http-proxy": "^1.0.7",

// app.use('/solr/*', proxy('', {
// filter: function(req, res) {
    // console.log("solr request encountered! " + res.data);
    // return req.method == 'GET';
// }
// }));

app.use(express.static(DIST_DIR));
app.use('/solr', proxy({target: 'http://10.0.1.22:8983', changeOrigin: true}));

// { '/solr': 
// { target: 'http://10.0.1.22:8983', secure: false, loglevel: "debug"} }


//Send index.html when the user access the web
app.get("*", function (req, res) {  
res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT);

