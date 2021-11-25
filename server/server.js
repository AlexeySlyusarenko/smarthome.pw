const https = require('https');
const fs = require('fs');
const path = require('path');

const pathServer = process.mainModule.path;

const options = {
  key: fs.readFileSync(`${pathServer}/cert/key.pem`),
  cert: fs.readFileSync(`${pathServer}/cert/cert.pem`),
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
