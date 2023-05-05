// Creo array con immagini richieste
const imgList = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

// Creo posizione nell'array
let imgListPos = 0;

// Dichiaro costante div immagine
let newImgDiv;

// Creo costante per collegare items container
const container = document.getElementById("items-container");

// Creo ciclo per caricare tutte le immagini dell'array
for(let i = 0; i < 5; i++){

    // Dichiaro e assegno costante con nuovo elemento div e aggiungo classe item
    newImgDiv = document.createElement("div");
    newImgDiv.classList.add("item");

    // Condizione per apporre classe active a primo div
    if(imgListPos === 0){
        newImgDiv.classList.add("active");
    }

    // Inserisco nel container il div e gli immetto il template literal con l'array ciclato
    container.append(newImgDiv);
    newImgDiv.innerHTML = `<img src="${imgList[imgListPos]}">`;

    // Passo posizione array al successivo elemento
    imgListPos = imgListPos + 1;

    if(imgListPos === 5){
        imgListPos = 0;
    }
}

// Creo array con tutti i div creati
const divList = document.getElementsByClassName("item");

// Dichiaro e assegno costante al bottone in basso nel DOM
const botButton = document.getElementById("bottom_button");

// Creo funzione con bottone per traslare immagini dall'alto verso il basso
botButton.addEventListener("click",
    function(){
        // Se la posizione dell'array imgList è inferiore alla sua lunghezza(5)
        if(imgListPos < imgList.length){

            // Rimuovo la classe active alla prima posizione dell'array
            divList[imgListPos].classList.remove("active");

            // Sposto di 1 la posizione array
            imgListPos = imgListPos +1;

            // Aggiungo la classe active al successivo elemento
            divList[imgListPos].classList.add("active");

            // Se mi trovo alla fine dell'array rimuovo il bottom button
            if(imgListPos === (imgList.length -1)){

                botButton.classList.add("hidden");
            }

            // Se mi trovo alla posizione 1 compare bottone top
            if(imgListPos === 1){
                topButton.classList.remove("hidden");
            }
        }
    }
)

// Dichiaro e assegno costante al bottone in alto nel DOM
const topButton = document.getElementById("top_button");

// Metto in classe nascosto il bottone in alto
topButton.classList.add("hidden");

// Creo funzione con bottone per traslare immagini dal basso verso l'alto
topButton.addEventListener("click",
    function(){
        // Se la posizione dell'array imgList è inferiore alla sua lunghezza
        if(imgListPos < imgList.length){

            // Rimuovo la classe active alla prima posizione dell'array
            divList[imgListPos].classList.remove("active");

            // Sposto di 1 la posizione array
            imgListPos = imgListPos -1;

            // Aggiungo la classe active al successivo elemento
            divList[imgListPos].classList.add("active");

            // Se mi trovo all'inizio dell'array rimuovo top botton
            if(imgListPos === 0){

                topButton.classList.add("hidden");
            }
            // Se mi trovo alla posizione 3 compare bottone bot
            if(imgListPos === (imgList.length - 2)){
                botButton.classList.remove("hidden");
            }
            
        }
    }
)

