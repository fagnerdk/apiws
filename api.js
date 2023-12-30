
const express = require('express')
const app = express()
var fs = require('fs');
app.use(express.json())




app.get('/kaio', (req, res) =>{

  fs.readFile('./dados.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

});

app.listen(process.env.PORT || 3000)