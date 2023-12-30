
const express = require('express')
const app = express()
app.use(express.json())

app.get('/kaio', (req, res) => res.json({'kaio':'oi'}))

app.listen(process.env.PORT || 3000)