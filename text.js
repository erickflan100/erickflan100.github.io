const btn = document.querySelector('.btn-pesquisar');
const txt = document.querySelector('.texto');
const capitulo = document.querySelector('.capitulo');
const livro = document.querySelector('.livros');

for (let i = 1; i <= 50; i++){
    capitulo.innerHTML += `<option value="${i}">${i}</option>`
}

livro.addEventListener('mouseout',function option(){
    const opcLivro = livro.options[livro.selectedIndex].value;
    if (opcLivro == "Genesis"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 50; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Exodo"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 40; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Levitico"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 27; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Numeros"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 36; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Deuteronomio"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 34; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Josue"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 24; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Juizes"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 21; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Rute"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 4; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "1Samuel"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 31; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "2Samuel"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 24; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "1Reis"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 22; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "2Reis"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 25; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "1Cronicas"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 29; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "2Cronicas"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 36; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Esdras"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 10; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Neemias"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 13; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Ester"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 10; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Jo"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 42; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Salmos"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 150; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Proverbios"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 31; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Eclesiastes"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 12; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Cantares"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 8; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Isaias"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 66; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Jeremias"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 52; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Lamentacoes"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 5; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Ezequiel"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 48; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Daniel"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 12; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Oseias"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 14; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Joel"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 3; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Amos"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 9; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Obadias"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 1; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Jonas"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 4; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Miqueias"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 7; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Naum"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 3; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Habacuque"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 3; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Sofonias"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 3; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Ageu"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 2; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Zacarias"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 14; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Malaquias"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 4; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Mateus"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 28; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Marcos"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 16; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Lucas"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 24; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Joao"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 21; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Atos"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 28; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Romanos"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 16; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "1Corintios"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 16; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "2Corintios"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 13; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Galatas"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 6; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Efesios"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 6; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Filipenses"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 4; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Colossenses"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 4; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "1Tessalonicenses"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 5; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "2Tessalonicenses"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 3; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "1Timoteo"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 6; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "2Timoteo"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 4; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Tito"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 3; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Filemom"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 1; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Hebreus"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 13; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Tiago"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 5; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "1Pedro"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 5; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "2Pedro"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 3; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "1Joao"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 5; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "2Joao"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 1; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "3Joao"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 1; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Judas"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 1; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
    if (opcLivro == "Apocalipse"){
        capitulo.innerHTML = ""
        for (let i = 1; i <= 22; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
})

btn.addEventListener('click', () => {
    const opcLivro = livro.options[livro.selectedIndex].value;
    console.log(opcLivro)
    const cap = document.querySelector('.capitulo');
    const opcCap = cap.options[cap.selectedIndex].value;
    //passar os dados do json
    txt.innerHTML = ""
    fetch(`${opcLivro}${opcCap}.json`).then((response) => {
        response.json().then((dados) => {
            dados.forEach(element => {
                txt.innerHTML += "<p>"+element.vers+" "+element.text+"<p/>"
            });
        })
      })
})

