
//const express = require('express')
import express from 'express'
const app = express()
function x(){ return 12}
app.use(express.json())


  app.get('/kaio', (req, res) => res.json({"divdendo":{'petr4':x()}}))

 
app.listen(process.env.PORT || 3000)