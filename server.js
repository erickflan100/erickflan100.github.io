const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
    
async function getBible(l) {
    const list = []
    const url = `https://search.nepebrasil.org/referencia-espirita?livro=66&chapter=${l}`
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
    fs.writeFile(`Apocalipse${l}.json`, JSON.stringify(list), err => {
        if (err) console.error(err);
    });
    // console.log(list);
}

setTimeout(() => {
for (var i = 1; i <= 22; i++){
            getBible(i)
            console.log(i)
        }
}, 5000)
 
// fazer pesquisa sobre o comentário
// async function getComment(l) {
//     const list = []
//     const url = `https://search.nepebrasil.org/referencia-espirita?livro=1&chapter=${l}`
//     const {data} = await axios(url)
//     const $ = cheerio.load(data)

    
//     $(".nepe-comment").each((i, elem) => {
//         const title = $(elem).find('h4').text().trim()
//         const vers = $(elem).find('.small').text().trim()
//         const text = $(elem).text().trim()
//         // if (vers !== "") {
//             const b = { title, vers, text }
//             list.push(b)
//             console.log(elem)
//         // }
//     })
//     fs.writeFile(`GenesisComent${l}.json`, JSON.stringify(list), err => {
//         if (err) console.error(err);
//     });
//     // console.log(list);
// }
// setTimeout(() => {
//     for (var i = 1; i <= 2; i++){
//                 getComment(i)
//                 console.log(i)
//             }
//     }, 5000)
