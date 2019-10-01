let data = window.movies
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    let cards =document.createElement("div")
    cards.className = "cardsMovies"
    let buttonCards = document.createElement("button")
    buttonCards.className = "buttonModal"
    buttonCards.innerHTML ="VER"
    
    cards.innerHTML+= `<img class="posterMovie" src=${data[i].Poster}></img>` + `<h2>${data[i].Title}</h2>`
    cards.appendChild(buttonCards)
    document.getElementById("root").appendChild(cards).innerHTML
    
}