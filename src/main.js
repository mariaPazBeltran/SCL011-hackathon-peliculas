const data = window.movies;

let viewCards = (data) => {
      document.getElementById("root").innerHTML="";
for (let i = 0; i < data.length; i++) {
  
    let cards =document.createElement("div")
    cards.className = "cardsMovies"
    let buttonCards = document.createElement("button")
    buttonCards.className = "buttonModal"
    buttonCards.innerHTML ="VER"
    
    cards.innerHTML+= `<img class="posterMovie" src=${data[i].Poster}></img>` + `<h2>${data[i].Title}</h2>`
    cards.appendChild(buttonCards)
    document.getElementById("root").appendChild(cards).innerHTML

    // crea modal
    buttonCards.addEventListener('click', ()=>{
        let modalCards = document.createElement("div")
        modalCards.className= "modalCardsView"
        modalCards.innerHTML+= 
        `<h2>${data[i].Title}</h2>` + `<p>Año: ${data[i].Year}</p>`+ `<p>Duracion: ${data[i].Runtime}</p>` + `<p>Genero: ${data[i].Genre}</p>`+ `<p>Director: ${data[i].Director}</p>` + `<p>sinopsis: ${data[i].Plot}</p>`
        let exitModal = document.createElement("button")
        exitModal.className="btnExit"
        exitModal.innerHTML= "X"
        modalCards.appendChild(exitModal)
        cards.appendChild(modalCards)
        exitModal.addEventListener('click', ()=>{
            modalCards.style.display= "none"
        })
    
    })
    document.getElementById("root").appendChild(cards).innerHTML
}
}

const selectGender = document.getElementById("gender");
selectGender.addEventListener("change", () =>{
    const condition = selectGender.value;
    let result = genderFilter(data, condition);
  viewCards(result);

});

