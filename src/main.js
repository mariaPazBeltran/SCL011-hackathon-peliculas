let arrayMovie= [`https://www.omdbapi.com/?i=tt0499549&apikey=597cb02c`, `https://www.omdbapi.com/?i=tt3659388&apikey=597cb02c`]
for (let i = 0; i < arrayMovie.length; i++) {
    fetch(arrayMovie[i])
    .then(response =>{
        return response.json()})
        .then(data=>{
            console.log(data)
        
    let cards =document.createElement("div")
    cards.className = "cardsMovies"
    let buttonCards = document.createElement("button")
    buttonCards.className = "buttonModal"
    buttonCards.innerHTML ="VER"
    
    cards.innerHTML+= 
    `<img class="posterMovie" src=${data.Poster}></img>
    <h2>${data.Title}</h2>`
    cards.appendChild(buttonCards)
    document.getElementById("showCards").appendChild(cards).innerHTML

    /* MODAL */
    
    buttonCards.addEventListener('click', ()=>{
        let modalContainer = document.createElement("div")
        modalContainer.className="modalContainer"
        let modalCards = document.createElement("div")
        modalCards.className= "modalCardsView"
        let infoContent = document.createElement("div")
        infoContent.className="infoContent"
        let buttonContent = document.createElement("div")
        buttonContent.className="contentBtn"
        let exitModal = document.createElement("button")
        exitModal.className="btnExit"
        exitModal.innerHTML= "X"
        let buttonWatchNow= document.createElement("button")
        buttonWatchNow.className = "btnWatchNow"
        buttonWatchNow.innerHTML= "Ver ahora"

        infoContent.innerHTML+= 
        `<h2>${data.Title}</h2> 
        <p>Año: ${data.Year}</p>
        <p>Duracion: ${data.Runtime}</p>
        <p>Genero: ${data.Genre}</p>
        <p>Director: ${data.Director}</p>
        <p>sinopsis: ${data.Plot}</p>`

        cards.appendChild(modalContainer)
        modalContainer.appendChild(modalCards)
        modalCards.appendChild(infoContent)
        modalCards.appendChild(buttonContent)
        modalCards.appendChild(buttonWatchNow)
        buttonContent.appendChild(exitModal)
        

        exitModal.addEventListener('click', ()=>{
            modalContainer.style.display= "none"
        })
    })
    document.getElementById("showCards").appendChild(cards).innerHTML


let viewCards = (data) => {
    document.getElementById("showCards").innerHTML="";
    for (let i = 0; i < data.length; i++) {
        
        let cards =document.createElement("div")
        cards.className = "cardsMovies"
        let buttonCards = document.createElement("button")
        buttonCards.className = "buttonModal"
        buttonCards.innerHTML ="VER"
    
        cards.innerHTML+= `<img class="posterMovie" src=${data.Poster}></img>` + `<h2>${data.Title}</h2>`
        cards.appendChild(buttonCards)
        document.getElementById("showCards").appendChild(cards).innerHTML

    /* MODAL */
        buttonCards.addEventListener('click', ()=>{
            let modalContainer = document.createElement("div")
            modalContainer.className="modalContainer"
            let modalCards = document.createElement("div")
            modalCards.className= "modalCardsView"
            let infoContent = document.createElement("div")
            infoContent.className="infoContent"
            let buttonContent = document.createElement("div")
            buttonContent.className="contentBtn"
            let exitModal = document.createElement("button")
            exitModal.className="btnExit"
            exitModal.innerHTML= "X"
            let buttonWatchNow= document.createElement("button")
            buttonWatchNow.className = "btnWatchNow"
            buttonWatchNow.innerHTML= "Ver ahora"
    
            infoContent.innerHTML+= 
            `<h2>${data.Title}</h2> 
            <p>Año: ${data.Year}</p>
            <p>Duracion: ${data.Runtime}</p>
            <p>Genero: ${data.Genre}</p>
            <p>Director: ${data.Director}</p>
            <p>sinopsis: ${data.Plot}</p>`
    
            cards.appendChild(modalContainer)
            modalContainer.appendChild(modalCards)
            modalCards.appendChild(infoContent)
            modalCards.appendChild(buttonContent)
            modalCards.appendChild(buttonWatchNow)
            buttonContent.appendChild(exitModal)
            
    
            exitModal.addEventListener('click', ()=>{
                modalContainer.style.display= "none"
            })
        })
        document.getElementById("showCards").appendChild(cards).innerHTML
    }
}

    const selectGender = document.getElementById("gender");
    selectGender.addEventListener("change", () =>{
        let result = genderFilter(data, selectGender.value);
        viewCards(result);
    });
})}