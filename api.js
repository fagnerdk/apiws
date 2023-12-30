const http = require('http');
const crypto = require('crypto');
http
  .createServer((req, res) => {
    var body = '';
    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
      if (!verifySignature(req, body)) {
        res.statusCode = 403;
        res.end("signature didn't match");
        return;
      }
      res.end('ok');
    });
  })
  .listen(3000);
function verifySignature(req, body) {
  const signature = crypto
    .createHmac('sha1', process.env.OAUTH2_SECRET)
    .update(body)
    .digest('hex');
  return signature === req.headers['x-vercel-signature'];
}