window.data = {
    path: "https://www.omdbapi.com/?apikey=c19f1742",
    getMoviesByTitle: (tittle) => {
        return fetch(data.path + "&s=" + tittle)
            .then(res => res.json());
    },

    getMoviesByImdbID: (imdbID) => {
        return fetch(data.path + "&i=" + imdbID)
            .then(res => res.json());
    }
}

/******** DATA DEL COMIENZO ********/ 

const dataMovies = window.movies;

document.getElementById("showCards").innerHTML="";

for (let i = 0; i < dataMovies.length; i++) {
        
    let cards =document.createElement("div")
    cards.className = "cardsMovies"
    let buttonCards = document.createElement("button")
    buttonCards.className = "buttonModal"
    buttonCards.innerHTML ="Más Info"
    let buttonWatch = document.createElement("button")
    buttonWatch.className = "buttonWatch"
    buttonWatch.innerHTML = "Ver Ahora"
    
    cards.innerHTML+= 
    `<img class="posterMovie" src=${dataMovies[i].Poster}></img>
    <h2>${dataMovies[i].Title}</h2>`

    cards.appendChild(buttonCards)
    cards.appendChild(buttonWatch)
    document.getElementById("showCards").appendChild(cards).innerHTML

    /*** MODAL ***/
    
    buttonCards.addEventListener('click', ()=>{
        let modalContainer = document.createElement("div")
        modalContainer.className="modalContainer"
        let modalCards = document.createElement("div")
        modalCards.className= "modalCardsView"
        let posterModal= document.createElement("img")
        posterModal.className = "posterModal"
        posterModal.src = dataMovies[i].Poster
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
        `<h2>${dataMovies[i].Title}</h2> 
        <p>Año: ${dataMovies[i].Year}</p>
        <p>Duracion: ${dataMovies[i].Runtime}</p>
        <p>Genero: ${dataMovies[i].Genre}</p>
        <p>Director: ${dataMovies[i].Director}</p>
        <p>Sinopsis: ${dataMovies[i].Plot}</p>`
        
        cards.appendChild(modalContainer)
        modalContainer.appendChild(modalCards)
        modalCards.appendChild(posterModal)
        modalCards.appendChild(infoContent)
        modalCards.appendChild(buttonContent)
        infoContent.appendChild(buttonWatchNow)
        buttonContent.appendChild(exitModal)
        
        exitModal.addEventListener('click', ()=>{
            modalContainer.style.display= "none"
        })
    })
    document.getElementById("showCards").appendChild(cards).innerHTML
}



/******** TODA LA DATA ********/    


const btnSearch = document.getElementById("searchBtn");
btnSearch.addEventListener("click", showPageData);


function showPageData() {
    document.getElementById("showCards").innerHTML=""
    let tittle = document.getElementById("search").value;
    data.getMoviesByTitle(tittle)

        .then(list => {           
            for (let i = 0; i < list["Search"].length; i++) {
                let element = list["Search"][i];
                data.getMoviesByImdbID(element["imdbID"])

                    .then(movie => {
                       console.log(movie)
        
        let cards =document.createElement("div")
        cards.className = "cardsMovies"
        let buttonCards = document.createElement("button")
        buttonCards.className = "buttonModal"
        buttonCards.innerHTML ="Más Info"
        let buttonWatch = document.createElement("button")
        buttonWatch.className = "buttonWatch"
        buttonWatch.innerHTML = "Ver Ahora"

        cards.innerHTML+= 
        `<img class="posterMovie" src=${movie.Poster}></img>
        <h2>${movie.Title}</h2>`
        cards.appendChild(buttonCards)
        cards.appendChild(buttonWatch)
        document.getElementById("showCards").appendChild(cards).innerHTML

        /* MODAL */
        buttonCards.addEventListener('click', ()=>{

            let modalContainer = document.createElement("div")
            modalContainer.className="modalContainer"
            let modalCards = document.createElement("div")
            modalCards.className= "modalCardsView"
            let posterModal= document.createElement("img")
            posterModal.className = "posterModal"
            posterModal.src = movie.Poster
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
            `<h2>${movie.Title}</h2> 
            <p>Año: ${movie.Year}</p>
            <p>Duracion: ${movie.Runtime}</p>
            <p>Genero: ${movie.Genre}</p>
            <p>Director: ${movie.Director}</p>
            <p>Sinopsis: ${movie.Plot}</p>`

            cards.appendChild(modalContainer)
            modalContainer.appendChild(modalCards)
            modalCards.appendChild(posterModal)
            modalCards.appendChild(infoContent)
            modalCards.appendChild(buttonContent)
            infoContent.appendChild(buttonWatchNow)
            buttonContent.appendChild(exitModal)
                    
            
            exitModal.addEventListener('click', ()=>{
                modalContainer.style.display= "none"
            })
        })
        document.getElementById("showCards").appendChild(cards).innerHTML

                });
            }
        });
}
