let movies = [
  {
    title: "Black Panther",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Queen & Slim",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Acrimony",
    rating: 3,
    hasWatched: true
  },
  {
    title: "Avengers End Game",
    rating: 4,
    hasWatched: false
  }
]

for(i = 0; i < movies.length; i++) {
  if (movies[i].hasWatched === true) {
    console.log("You have watched " + movies[i].title + " - " + movies[i].rating + " stars");
  } else {
    console.log("You have not seen " + movies[i].title + " - " + movies[i].rating + " stars");
  }
};