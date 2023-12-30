
const express = require('express')
const app = express()
const dados = require('./dados.json')
app.use(express.json())

app.get('/kaio', (req, res) => res.dados

app.listen(process.env.PORT || 3000)