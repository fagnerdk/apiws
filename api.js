
const express = require('express')
const app = express()
var fs = require('fs');

app.use(express.json())

var jog0 = 0; // numro 0
function joguo0(){
    jog0 +=1
}
setInterval(()=>{


x = jog0()
app.get('/kaio', (req, res) => res.json({'kaio':[1,3,x]}))

},1500)

app.listen(process.env.PORT || 3000)