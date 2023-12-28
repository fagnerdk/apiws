 
const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.get('/kaio', (req, res) => res.json({'kaio':'oi'}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
