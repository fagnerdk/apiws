 
const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

app.get('/kaio', (req, res) => res.json({'kaio':'oi'}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
