// Creo array con immagini richieste
const imgList = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

// Dichiaro costante div immagine
let newImgDiv;

// Creo costante per collegare items container
const container = document.getElementById("items-container");

// Creo posizione nell'array
let imgListPos = 0;

// Creo ciclo per caricare tutte le immagini dell'array
for(let i = 0; i < 5; i++){

    // Dichiaro e assegno costante con nuovo elemento div e aggiungo classe item
    newImgDiv = document.createElement("div");
    newImgDiv.classList.add("item");

    // Condizione per apporre classe active a primo array
    if(imgListPos == 0){
        newImgDiv.classList.add("active");
    }

    // Inserisco nel container il div e gli immetto il template literal con l'array ciclato
    container.append(newImgDiv);
    newImgDiv.innerHTML = `<img src="${imgList[imgListPos]}">`;

    // Passo posizione array al successivo elemento
    imgListPos = imgListPos + 1;

    if(imgListPos == 5){
        imgListPos = 0;
    }
}

// Dichiaro e assegno costante a button in DOM
const myButton = document.getElementById("myButton");

// Creo array con tutti i div creati
const divList = document.getElementsByClassName("item");

// Creo funzione con bottone per traslare immagini
myButton.addEventListener("click",
    function(){
        // Se la posizione dell'array imgList è inferiore alla sua lunghezza
        if(imgListPos < imgList.length){

            divList[imgListPos].classList.remove("active");

            
        }
    }
)

