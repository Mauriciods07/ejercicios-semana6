let $btnGato = document.querySelector('#btnGato');
let $btnPerro = document.querySelector('#btnPerro');
let $colImgGato = document.querySelector('#col-cat');
let $colImgPerro = document.querySelector('#col-dog');

$btnGato.addEventListener('click', () =>{
    
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data => {
            console.log(data);
            $colImgGato.innerHTML = `<img src="" alt="" id="imgGato">`;
            let $imgGato = document.querySelector('#imgGato');
            $imgGato.src = data[0].url;
        })
})

$btnPerro.addEventListener('click', () => {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json()).then(data => {
            console.log(data);
            $colImgPerro.innerHTML = `<img src="" alt="" id="imgPerro">`;
            let $imgPerro = document.querySelector('#imgPerro');
            $imgPerro.src = data.message;
        })
})