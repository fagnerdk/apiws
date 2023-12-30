
const express = require('express')
const app = express()
app.use(express.json())
var puppeteer=require( 'puppeteer')

console.log('o robo esta ligado ')

const pl = 'vale3'

async function b() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(`https://www.bing.com/search?q=+dividendo+${pl}&qs=n&form=QBRE&sp=-1&lq=0&pq=+dividendo+${pl}&sc=11-13&sk=&cvid=3849C94B0F9A470DBFF6DD0BFE4D77F3&ghsh=0&ghacc=0&ghpl=`);
  
   
  const textSelector = await page.waitForSelector(
      '[ class="b_focusTextMedium"]'
    )
    const tex2 = await textSelector.evaluate(el => el.textContent);
    var arry=[...tex2]
    const x =parseFloat( arry[3]+''+arry[5]+''+arry[6]+''+arry[7])

  console.log(x)

  app.get('/kaio', (req, res) => res.json({"divdendo":[1,3,x]}))

 await browser.close(); 
 

}

b()
 

app.listen(process.env.PORT || 3000)