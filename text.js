const btn = document.querySelector('.btn-pesquisar');
const txt = document.querySelector('.text');
const capitulo = document.querySelector('.capitulo');
const livro = document.querySelector('.livros');

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
        for (let i = 1; i <= 10; i++){
            capitulo.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
})

btn.addEventListener('click', () => {
    const opcLivro = livro.options[livro.selectedIndex].value;
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

