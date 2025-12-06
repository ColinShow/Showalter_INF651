const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWM0MmRhODRkOWNmMDA5NTFmNjRiZjA4MzNmN2FhNiIsIm5iZiI6MTc2NDg4NjU5NS42NzkwMDAxLCJzdWIiOiI2OTMyMDg0MzIwZjkxOGViMmI2OWJhMWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ru4KHUZeGe02JDhcl25bBdpC2LrbYFgwRw1QVKnWJRw'
  }
};

// GET popular movies
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then(movies => {
    renderMovies(movies.results)
    console.log(movies.results)
});

const cardsContainer = document.querySelector('#cards-container');

// Display movie cards
function renderMovies(movies) {

  movies.forEach(movie => {
    const div = document.createElement('div');
    const image = document.createElement('img')
    const title = document.createElement('h3')
    const id = document.createElement('p')
    div.classList = 'card'
    image.classList = 'card-img'
    title.classList = 'card-title'
    id.classList = 'card-id'

    // Creating image url for poster
    image.src = "https://image.tmdb.org/t/p/w342" + movie.poster_path

    // Creating card title
    title.innerText = `${movie.title}`

    // Creating card ID
    id.innerText = `${movie.id}`

    div.appendChild(image)
    div.appendChild(title)
    div.appendChild(id)
    cardsContainer.appendChild(div)
  })
};
