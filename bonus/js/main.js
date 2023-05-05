// Creo array con immagini richieste
const imgList = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

// Creo costante per collegare items container
const container = document.getElementById("items_container");

// Creo costante per collegare items thumbnail container
const thumbnailContainer = document.getElementById("thumbnail_container");

// Creo ciclo per caricare tutte le immagini dell'array e thumbnail
for(let i = 0; i < 5; i++){

    // Innesto nel container una stringa backtick che si ripeta per le immagini
    container.innerHTML += `<div class="item">
                                <img src="${imgList[i]}">
                            </div>`;

     // Innesto nel container una stringa backtick che si ripeta per le THUMBNAIL
    thumbnailContainer.innerHTML += `<div class="thumb">
                                    <img src="${imgList[i]}">
                                    </div>`;

}

// Creo array con tutti i div creati
const divList = document.getElementsByClassName("item");

// Creo array con tutti i div thumbnail
const thumbnailList = document.getElementsByClassName("thumb");

// Creo posizione nell'array div creati
let arrayPos = 0;

// Appongo classe active e brightness a primo div
divList[arrayPos].classList.add("active");
thumbnailList[arrayPos].classList.add("brightness");

// Dichiaro e assegno costante al bottone in basso nel DOM
const botButton = document.getElementById("bottom_button");

// Creo funzione con bottone per traslare immagini dall'alto verso il basso
botButton.addEventListener("click",
    function(){

        // Se la posizione dell'array imgList è inferiore alla sua lunghezza(5)
        if(arrayPos < imgList.length){

            // Rimuovo la classe active e brightness alla prima posizione dell'array
            divList[arrayPos].classList.remove("active");
            thumbnailList[arrayPos].classList.remove("brightness");

            // Sposto di 1 la posizione array
            arrayPos = arrayPos +1;

            // Aggiungo la classe active e brightness al successivo elemento
            divList[arrayPos].classList.add("active");
            thumbnailList[arrayPos].classList.add("brightness");


            // Se mi trovo alla fine dell'array rimuovo il bottom button
            if(arrayPos === (imgList.length -1)){
                botButton.classList.add("hidden");
            }

            // Se mi trovo alla posizione 1 compare bottone top
            if(arrayPos === 1){
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
        if(arrayPos < imgList.length){

            // Rimuovo la classe active e brightness alla prima posizione dell'array
            divList[arrayPos].classList.remove("active");
            thumbnailList[arrayPos].classList.remove("brightness");

            // Sposto di 1 la posizione array
            arrayPos = arrayPos -1;

            // Aggiungo la classe active e brightness al successivo elemento
            divList[arrayPos].classList.add("active");
            thumbnailList[arrayPos].classList.add("brightness");

            // Se mi trovo all'inizio dell'array rimuovo top botton
            if(arrayPos === 0){
                topButton.classList.add("hidden");
            }
            // Se mi trovo alla posizione 3 compare bottone bot
            if(arrayPos === (imgList.length - 2)){
                botButton.classList.remove("hidden");
            }
            
        }
    }
)

