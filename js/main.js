// Creo array con immagini richieste
const imgList = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

// Dichiaro costante div immagine
let newImgDiv;

// Creo costante per collegare items container
const container = document.getElementById("items-container");

// Creo ciclo per caricare tutte le immagini dell'array
for(let i = 0; i < 5; i++){

    // Dichiaro e assegno costante con nuovo elemento div e aggiungo classe item
    newImgDiv = document.createElement("div");
    newImgDiv.classList.add("item");

    // Inserisco nel container il div e gli immetto il template literal con l'array ciclato
    container.append(newImgDiv);
    newImgDiv.innerHTML = `<img src="${imgList[i]}">`;
}

// Creo array con tutti i div creati
const divList = document.getElementsByClassName("item");

// Creo posizione nell'array
let divListPos = 0;

// Appongo classe active a primo div
divList[divListPos].classList.add("active");

// Dichiaro e assegno costante al bottone in basso nel DOM
const botButton = document.getElementById("bottom_button");

// Creo funzione con bottone per traslare immagini dall'alto verso il basso
botButton.addEventListener("click",
    function(){

        // Se la posizione dell'array imgList è inferiore alla sua lunghezza(5)
        if(divListPos < imgList.length){

            // Rimuovo la classe active alla prima posizione dell'array
            divList[divListPos].classList.remove("active");

            // Sposto di 1 la posizione array
            divListPos = divListPos +1;

            // Aggiungo la classe active al successivo elemento
            divList[divListPos].classList.add("active");

            // Se mi trovo alla fine dell'array rimuovo il bottom button
            if(divListPos === (imgList.length -1)){

                botButton.classList.add("hidden");
            }

            // Se mi trovo alla posizione 1 compare bottone top
            if(divListPos === 1){
                topButton.classList.remove("hidden");
            }
            console.log(divListPos);
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
        if(divListPos < imgList.length){

            // Rimuovo la classe active alla prima posizione dell'array
            divList[divListPos].classList.remove("active");

            // Sposto di 1 la posizione array
            divListPos = divListPos -1;

            // Aggiungo la classe active al successivo elemento
            divList[divListPos].classList.add("active");

            // Se mi trovo all'inizio dell'array rimuovo top botton
            if(divListPos === 0){

                topButton.classList.add("hidden");
            }
            // Se mi trovo alla posizione 3 compare bottone bot
            if(divListPos === (imgList.length - 2)){
                botButton.classList.remove("hidden");
            }
            
        }
    }
)

