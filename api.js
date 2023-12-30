
const express = require('express')
const app = express()
var fs = require('fs');

app.use(express.json())
function valo(){
  return  2
}
x = valo()
app.get('/kaio', (req, res) => res.json({'kaio':[1,3,x]}))


app.listen(process.env.PORT || 3000)