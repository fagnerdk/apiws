

import express from "express";
const app = express()

import parser from "body-parser";
const urlencodedpase = parser.urlencoded({ extended: false });

/*app.use(express.json())
import puppeteer from 'puppeteer'

console.log('o robo esta ligado ')

const pl = ['vale3','petr4']
const posentage = 'Yield'

async function b1(a) {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  
   await page.goto(`https://www.bing.com/search?q=+${posentage} +${pl[0]}&qs=n&form=QBRE&sp=-1&lq=0&pq=+${posentage}+${pl[0]}&sc=11-13&sk=&cvid=3849C94B0F9A470DBFF6DD0BFE4D77F3&ghsh=0&ghacc=0&ghpl=`);
 
   
  const textSelector = await page.waitForSelector(
      '[ class="b_focusTextMedium"]'
    )
    const tex2 = await textSelector.evaluate(el => el.textContent);
    var arry=[...tex2]
    const x =parseFloat( arry[0]+''+arry[2]+''+arry[3]+''+arry[4])

  console.log(x)

  app.get('/valo', (req, res) => res.json({"divdendo":{'vale3':x}})) 


 await browser.close()
}*/

app.get("/kaio1", function (req, res) {
  res.end("tudo ok:  " + req.query.name);
});

app.post("/kaio",urlencodedpase,function (req, res) {
  res.end(req.body.name);
  console.log(req.body.name)
});
/*
try {
  setInterval(()=>{b1();;console.log('buscando valo ...') },20000)
} catch (erro) {
  console.log(erro.browser)
  setInterval(()=>{b1();;console.log('segunda tentativa buscando valo ...') },20000)
}*/




app.listen(process.env.PORT || 3000)