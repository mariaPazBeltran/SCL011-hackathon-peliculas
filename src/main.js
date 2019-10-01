let data = window.movies
for (let i = 0; i < data.length; i++) {
   // console.log(data[i]);
    let cards =document.createElement("div")
    cards.className = "cardsMovies"
    let buttonCards = document.createElement("button")
    buttonCards.className = "buttonModal"
    buttonCards.innerHTML ="VER"
    cards.innerHTML+= `<img class="posterMovie" src=${data[i].Poster}></img>` + `<h2>${data[i].Title}</h2>`
    cards.appendChild(buttonCards)
// crea modal
buttonCards.addEventListener('click', ()=>{
    let modalCards = document.createElement("div")
    modalCards.className= "modalCardsView"
    modalCards.innerHTML+= `<h2>${data[i].Title}</h2>` + `<p>Año: ${data[i].Year}</p>`+ `<p>Duracion: ${data[i].Runtime}</p>` + `<p>Genero: ${data[i].Genre}</p>`+ `<p>Director: ${data[i].Director}</p>` + `<p>sinopsis: ${data[i].Plot}</p>`
    cards.appendChild(modalCards)
})
document.getElementById("root").appendChild(cards).innerHTML

}
