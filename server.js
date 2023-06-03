const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
    
async function getBible(l) {
    const list = []
    const url = `https://search.nepebrasil.org/referencia-espirita?livro=1&chapter=${l}`
    const {data} = await axios(url)
    const $ = cheerio.load(data)

    
    $("#biblia2 a").each((i, elem) => {
        const text = $(elem).find('.col-8').text().trim()
        const vers = $(elem).find('.col-2').text().trim()
        // if (vers !== "") {
            const b = { vers, text }
            list.push(b)
        // }
    })
    fs.writeFile(`Genesis${l}.json`, JSON.stringify(list), err => {
        if (err) console.error(err);
    });
    // console.log(list);
}
setTimeout(() => {
for (var i = 1; i <= 50; i++){
            getBible(i)
            console.log(i)
        }
}, 5000)
