const movies = [
    {"Title":"Armagedon",
    "Year":"2015",
    "Rated":"N/A",
    "Released":"20 Dec 2015",
    "Runtime":"1 min",
    "Genre":"Short, Action, Sci-Fi",
    "Director":"Danil Andreev",
    "Writer":"Danil Andreev",
    "Actors":"Danil Andreev",
    "Plot":"N/A",
    "Language":"Russian",
    "Country":"Russia",
    "Awards":"N/A",
    "Poster":"https://m.media-amazon.com/images/M/MV5BZDdhM2ZkYjYtMDQ0MC00NTJhLTlkYmYtMDczZTQwMjZhNzBkXkEyXkFqcGdeQXVyNDcwNDE0Nzk@._V1_SX300.jpg",
    "Ratings":[{"Source":"Internet Movie Database","Value":"1.6/10"}],
    "Metascore":"N/A",
    "imdbRating":"1.6",
    "imdbVotes":"19",
    "imdbID":"tt6010492",
    "Type":"movie",
    "DVD":"N/A",
    "BoxOffice":"N/A",
    "Production":"N/A",
    "Website":"N/A",
    "Response":"True"},
{"Title":"Rise of the Planet of the Apes","Year":"2011","Rated":"PG-13","Released":"05 Aug 2011","Runtime":"105 min","Genre":"Action, Drama, Sci-Fi, Thriller","Director":"Rupert Wyatt","Writer":"Rick Jaffa, Amanda Silver","Actors":"Andy Serkis, Karin Konoval, Terry Notary, Richard Ridings","Plot":"A substance designed to help the brain repair itself gives advanced intelligence to a chimpanzee who leads an ape uprising.","Language":"English, Sign Languages","Country":"USA, UK, Canada","Awards":"Nominated for 1 Oscar. Another 21 wins & 42 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYzE3ZmNlZTctMDdmNy00MjMzLWFmZmYtN2M5N2YyYTQ1ZDJjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"7.6","imdbVotes":"476,250","imdbID":"tt1318514","Type":"movie","DVD":"13 Dec 2011","BoxOffice":"$175,300,000","Production":"20th Century Fox","Website":"http://www.apeswillrise.com/","Response":"True"},
{"Title":"Battle for the Planet of the Apes","Year":"1973","Rated":"G","Released":"15 Jun 1973","Runtime":"93 min","Genre":"Action, Sci-Fi","Director":"J. Lee Thompson","Writer":"Pierre Boulle (characters), Paul Dehn (story), John William Corrington (screenplay), Joyce Hooper Corrington (screenplay)","Actors":"Roddy McDowall, Claude Akins, Natalie Trundy, Severn Darden","Plot":"Ten years after a worldwide series of ape revolutions and a brutal nuclear war among humans, Caesar must protect survivors of both species from an insidious human cult and a militant ape faction alike.","Language":"English","Country":"USA","Awards":"1 nomination.","Poster":"https://m.media-amazon.com/images/M/MV5BNWRlYjU3ODYtNzAzZS00YWE5LTkxZTEtYjM1YzIwZTlhMWQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.5/10"},{"Source":"Rotten Tomatoes","Value":"37%"},{"Source":"Metacritic","Value":"40/100"}],"Metascore":"40","imdbRating":"5.5","imdbVotes":"27,183","imdbID":"tt0069768","Type":"movie","DVD":"05 May 2009","BoxOffice":"N/A","Production":"20th Century Fox","Website":"N/A","Response":"True"},
{"Title":"Dawn of the Planet of the Apes","Year":"2014","Rated":"PG-13","Released":"11 Jul 2014","Runtime":"130 min","Genre":"Action, Adventure, Drama, Sci-Fi","Director":"Matt Reeves","Writer":"Mark Bomback, Rick Jaffa, Amanda Silver, Rick Jaffa (based on characters created by), Amanda Silver (based on characters created by)","Actors":"Andy Serkis, Jason Clarke, Gary Oldman, Keri Russell","Plot":"A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors of the devastating virus unleashed a decade earlier.","Language":"English, American Sign Language","Country":"USA, UK, Canada","Awards":"Nominated for 1 Oscar. Another 16 wins & 47 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTgwODk3NDc1N15BMl5BanBnXkFtZTgwNTc1NjQwMjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"7.6","imdbVotes":"394,257","imdbID":"tt2103281","Type":"movie","DVD":"02 Dec 2014","BoxOffice":"$183,278,877","Production":"20th Century Fox","Website":"http://www.apes2014.com/","Response":"True"},
{"Title":"Planet of the Apes","Year":"2001","Rated":"PG-13","Released":"27 Jul 2001","Runtime":"119 min","Genre":"Action, Adventure, Sci-Fi, Thriller","Director":"Tim Burton","Writer":"Pierre Boulle (novel), William Broyles Jr. (screenplay), Lawrence Konner (screenplay), Mark Rosenthal (screenplay)","Actors":"Mark Wahlberg, Tim Roth, Helena Bonham Carter, Michael Clarke Duncan","Plot":"In 2029, an Air Force astronaut crash-lands on a mysterious planet where evolved, talking apes dominate a race of primitive humans.","Language":"English","Country":"USA","Awards":"Nominated for 2 BAFTA Film Awards. Another 10 wins & 27 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BY2RlMDhlY2MtMjQ1Zi00NzI5LTgxOTgtZjliNWMzYTY3NWZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.7/10"},{"Source":"Rotten Tomatoes","Value":"45%"},{"Source":"Metacritic","Value":"50/100"}],"Metascore":"50","imdbRating":"5.7","imdbVotes":"202,956","imdbID":"tt0133152","Type":"movie","DVD":"20 Nov 2001","BoxOffice":"$178,094,583","Production":"20th Century Fox","Website":"http://www.planetoftheapes.com","Response":"True"},
{"Title":"War for the Planet of the Apes","Year":"2017","Rated":"PG-13","Released":"14 Jul 2017","Runtime":"140 min","Genre":"Action, Adventure, Drama, Sci-Fi, Thriller","Director":"Matt Reeves","Writer":"Mark Bomback, Matt Reeves, Rick Jaffa (based on characters created by), Amanda Silver (based on characters created by)","Actors":"Andy Serkis, Woody Harrelson, Steve Zahn, Karin Konoval","Plot":"After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.","Language":"English, American Sign Language","Country":"USA, Canada, New Zealand","Awards":"Nominated for 1 Oscar. Another 22 wins & 46 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"7.4","imdbVotes":"206,234","imdbID":"tt3450958","Type":"movie","DVD":"24 Oct 2017","BoxOffice":"$146,872,826","Production":"20th Century Fox","Website":"http://www.warfortheplanet.com/","Response":"True"},
{"Title":"Conquest of the Planet of the Apes","Year":"1972","Rated":"PG","Released":"30 Jun 1972","Runtime":"88 min","Genre":"Action, Sci-Fi","Director":"J. Lee Thompson","Writer":"Paul Dehn, Pierre Boulle (characters)","Actors":"Roddy McDowall, Don Murray, Ricardo Montalban, Natalie Trundy","Plot":"In a futuristic world that has embraced ape slavery, Caesar, the son of the late simians Cornelius and Zira, surfaces after almost twenty years of hiding out from the authorities, and prepares for a slave revolt against humanity.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BNzliNDU3OWYtODg2Zi00OGI3LWExOTgtOTk2NGM2NGY2Y2M0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.1/10"},{"Source":"Rotten Tomatoes","Value":"48%"},{"Source":"Metacritic","Value":"49/100"}],"Metascore":"49","imdbRating":"6.1","imdbVotes":"28,294","imdbID":"tt0068408","Type":"movie","DVD":"05 Sep 2000","BoxOffice":"N/A","Production":"20th Century Fox","Website":"N/A","Response":"True"},
{"Title":"Beneath the Planet of the Apes","Year":"1970","Rated":"G","Released":"26 May 1970","Runtime":"95 min","Genre":"Action, Adventure, Sci-Fi","Director":"Ted Post","Writer":"Paul Dehn (story), Mort Abrahams (story), Pierre Boulle (characters created by), Paul Dehn (screenplay)","Actors":"James Franciscus, Kim Hunter, Maurice Evans, Linda Harrison","Plot":"The sole survivor of an interplanetary rescue mission searches for the only survivor of the previous expedition. He discovers a planet ruled by apes and an underground city run by telepathic humans.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMjljYjY0MDktZjdlNC00ZTAxLTkzM2ItM2JjZjQ3YzQ0NzJiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.1/10"},{"Source":"Rotten Tomatoes","Value":"38%"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"6.1","imdbVotes":"39,359","imdbID":"tt0065462","Type":"movie","DVD":"05 Sep 2000","BoxOffice":"N/A","Production":"20th Century Fox","Website":"N/A","Response":"True"},
{"Title":"Back to the Future","Year":"1985","Rated":"PG","Released":"03 Jul 1985","Runtime":"116 min","Genre":"Adventure, Comedy, Sci-Fi","Director":"Robert Zemeckis","Writer":"Robert Zemeckis, Bob Gale","Actors":"Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover","Plot":"Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.","Language":"English","Country":"USA","Awards":"Won 1 Oscar. Another 19 wins & 25 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.5","imdbVotes":"951,979","imdbID":"tt0088763","Type":"movie","DVD":"17 Dec 2002","BoxOffice":"$2,925,880","Production":"Universal Pictures","Website":"http://www.bttfmovie.com/","Response":"True"},
{"Title":"Back to the Future Part 2: Behind the Scenes","Year":"2002","Rated":"N/A","Released":"17 Dec 2002","Runtime":"65 min","Genre":"Documentary","Director":"N/A","Writer":"N/A","Actors":"Bob Gale","Plot":"Archival Behind-the-Scenes: \"Outtakes\" shows actors messing up their lines and accidents on the set. \"Production Design\" is a quick look at creating the sets. \"Storyboarding\" compares ...","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5524024","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Back to the Future Part 3: Behind the Scenes","Year":"2002","Rated":"N/A","Released":"17 Dec 2002","Runtime":"31 min","Genre":"Documentary, Short","Director":"N/A","Writer":"N/A","Actors":"Bob Gale","Plot":"Archival Behind-the-Scenes: \"Outtakes\" shows the cast breaking character and having some fun on the set. \"Designing the Town of Hill Valley\" takes a quick look at the history of Hill Valley...","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5524040","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Matrix","Year":"1993–","Rated":"N/A","Released":"01 Mar 1993","Runtime":"60 min","Genre":"Action, Drama, Fantasy, Thriller","Director":"N/A","Writer":"Grenville Case","Actors":"Nick Mancuso, Phillip Jarrett, Carrie-Anne Moss, John Vernon","Plot":"Steven Matrix is one of the underworld's foremost hitmen until his luck runs out, and someone puts a contract out on him. Shot in the forehead by a .22 pistol, Matrix \"dies\" and finds ...","Language":"English","Country":"Canada","Awards":"1 win.","Poster":"https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"}],"Metascore":"N/A","imdbRating":"7.8","imdbVotes":"125","imdbID":"tt0106062","Type":"series","totalSeasons":"N/A","Response":"True"},
{"Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Sci-Fi, Thriller","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Language":"English, Japanese, French","Country":"USA, UK","Awards":"Won 4 Oscars. Another 152 wins & 204 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.8","imdbVotes":"1,871,690","imdbID":"tt1375666","Type":"movie","DVD":"07 Dec 2010","BoxOffice":"$292,568,851","Production":"Warner Bros. Pictures","Website":"http://inceptionmovie.warnerbros.com/","Response":"True"},
{"Title":"Avatar","Year":"2009","Rated":"PG-13","Released":"18 Dec 2009","Runtime":"162 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"James Cameron","Writer":"James Cameron","Actors":"Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang","Plot":"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.","Language":"English, Spanish","Country":"USA","Awards":"Won 3 Oscars. Another 85 wins & 128 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"83/100"}],"Metascore":"83","imdbRating":"7.8","imdbVotes":"1,059,860","imdbID":"tt0499549","Type":"movie","DVD":"22 Apr 2010","BoxOffice":"$749,700,000","Production":"20th Century Fox","Website":"http://www.avatarmovie.com/","Response":"True"},
{"Title":"The Martian","Year":"2015","Rated":"PG-13","Released":"02 Oct 2015","Runtime":"144 min","Genre":"Adventure, Drama, Sci-Fi","Director":"Ridley Scott","Writer":"Drew Goddard (screenplay by), Andy Weir (based on the novel by)","Actors":"Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels","Plot":"An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.","Language":"English, Mandarin","Country":"UK, USA, Hungary","Awards":"Nominated for 7 Oscars. Another 37 wins & 185 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"80/100"}],"Metascore":"80","imdbRating":"8.0","imdbVotes":"695,039","imdbID":"tt3659388","Type":"movie","DVD":"12 Jan 2016","BoxOffice":"$202,313,768","Production":"20th Century Fox","Website":"http://TheMartianMovie.com","Response":"True"},
{"Title":"Star Wars: Episode 1½: A Deadly Interception","Year":"2007","Rated":"N/A","Released":"28 Aug 2007","Runtime":"48 min","Genre":"Action, Adventure, Fantasy","Director":"Ryan Glista","Writer":"Ryan Glista","Actors":"Ryan Glista, Matthew Glista, Brian Futtner, Walter Glista","Plot":"A 12-year-old Anakin Skywalker is abducted from the Jedi Temple. Jedi Ona Zander is sent to Anakin's rescue, only to discover he is being trained in the dark side of the force by the Sith.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMzRjNzI5MzMtOWIxMC00OWJjLWIzMGMtNDg4MTBiMzZkZGY3XkEyXkFqcGdeQXVyODA3NjUxNTM@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt8452558","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Star Wars: Episode I - The Phantom Menace","Year":"1999","Rated":"PG","Released":"19 May 1999","Runtime":"136 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"George Lucas","Writer":"George Lucas","Actors":"Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd","Plot":"Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.","Language":"English","Country":"USA","Awards":"Nominated for 3 Oscars. Another 26 wins & 65 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.5/10"},{"Source":"Rotten Tomatoes","Value":"53%"},{"Source":"Metacritic","Value":"51/100"}],"Metascore":"51","imdbRating":"6.5","imdbVotes":"661,698","imdbID":"tt0120915","Type":"movie","DVD":"16 Oct 2001","BoxOffice":"$431,000,000","Production":"20th Century Fox","Website":"http://www.starwars.com/episode-i/","Response":"True"},
{"Title":"Star Wars: Episode II - Attack of the Clones","Year":"2002","Rated":"PG","Released":"16 May 2002","Runtime":"142 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"George Lucas","Writer":"George Lucas (screenplay by), Jonathan Hales (screenplay by), George Lucas (story by)","Actors":"Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee","Plot":"Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 16 wins & 58 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.6/10"},{"Source":"Rotten Tomatoes","Value":"66%"},{"Source":"Metacritic","Value":"54/100"}],"Metascore":"54","imdbRating":"6.6","imdbVotes":"581,996","imdbID":"tt0121765","Type":"movie","DVD":"12 Nov 2002","BoxOffice":"$307,900,000","Production":"20th Century Fox","Website":"http://www.starwars.com/episode-ii/","Response":"True"},
{"Title":"Star Wars: Episode III - Revenge of the Sith","Year":"2005","Rated":"PG-13","Released":"19 May 2005","Runtime":"140 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"George Lucas","Writer":"George Lucas","Actors":"Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid","Plot":"Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 25 wins & 56 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"80%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"7.5","imdbVotes":"647,584","imdbID":"tt0121766","Type":"movie","DVD":"01 Nov 2005","BoxOffice":"N/A","Production":"20th Century Fox","Website":"http://www.starwars.com/","Response":"True"},
{"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 50 wins & 28 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"90/100"}],"Metascore":"90","imdbRating":"8.6","imdbVotes":"1,138,257","imdbID":"tt0076759","Type":"movie","DVD":"21 Sep 2004","BoxOffice":"N/A","Production":"20th Century Fox","Website":"http://www.starwars.com/episode-iv/","Response":"True"},
{"Title":"Star Wars: Episode V - The Empire Strikes Back","Year":"1980","Rated":"PG","Released":"20 Jun 1980","Runtime":"124 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"Irvin Kershner","Writer":"Leigh Brackett (screenplay by), Lawrence Kasdan (screenplay by), George Lucas (story by)","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams","Plot":"After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.","Language":"English","Country":"USA","Awards":"Won 1 Oscar. Another 21 wins & 19 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"95%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"8.7","imdbVotes":"1,070,015","imdbID":"tt0080684","Type":"movie","DVD":"21 Sep 2004","BoxOffice":"$4,548,170","Production":"Twentieth Century Fox","Website":"http://www.starwars.com/episode-v/","Response":"True"},
{"Title":"Star Wars: Episode VI - Return of the Jedi","Year":"1983","Rated":"PG","Released":"25 May 1983","Runtime":"131 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"Richard Marquand","Writer":"Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams","Plot":"After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.","Language":"English","Country":"USA","Awards":"Nominated for 4 Oscars. Another 20 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"81%"},{"Source":"Metacritic","Value":"58/100"}],"Metascore":"58","imdbRating":"8.3","imdbVotes":"875,961","imdbID":"tt0086190","Type":"movie","DVD":"12 Sep 2006","BoxOffice":"N/A","Production":"Twentieth Century Fox","Website":"http://www.starwars.com/episode-vi/","Response":"True"},
{"Title":"Star Wars: Episode VII - The Force Awakens","Year":"2015","Rated":"PG-13","Released":"18 Dec 2015","Runtime":"138 min","Genre":"Action, Adventure, Sci-Fi","Director":"J.J. Abrams","Writer":"Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)","Actors":"Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver","Plot":"Three decades after the Empire's defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.","Language":"English","Country":"USA","Awards":"Nominated for 5 Oscars. Another 57 wins & 123 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"81/100"}],"Metascore":"81","imdbRating":"8.0","imdbVotes":"793,036","imdbID":"tt2488496","Type":"movie","DVD":"05 Apr 2016","BoxOffice":"$936,658,640","Production":"Walt Disney Pictures","Website":"http://starwars.com/","Response":"True"},
{"Title":"Star Wars: The Last Jedi","Year":"2017","Rated":"PG-13","Released":"15 Dec 2017","Runtime":"152 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"Rian Johnson","Writer":"Rian Johnson, George Lucas (based on characters created by)","Actors":"Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley","Plot":"Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.","Language":"English","Country":"USA","Awards":"Nominated for 4 Oscars. Another 12 wins & 71 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"85/100"}],"Metascore":"85","imdbRating":"7.1","imdbVotes":"472,141","imdbID":"tt2527336","Type":"movie","DVD":"27 Mar 2018","BoxOffice":"$619,117,636","Production":"Walt Disney Pictures","Website":"http://www.starwars.com/the-last-jedi/","Response":"True"},


]