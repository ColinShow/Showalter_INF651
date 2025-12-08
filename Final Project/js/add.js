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
    renderMovies(movies.results);
    console.log(movies.results);
  })
  .catch(err => console.error(err));

const cardsContainer = document.querySelector('#cards-container');

// Display movie cards
function renderMovies(movies) {
  movies.forEach(movie => {
    // Skip movie if no poster is present
    if (movie.poster_path == null) {
      return;
    }

    // Creating card elements
    const div = document.createElement('div');
    const imageLink = document.createElement('a');
    const image = document.createElement('img');
    const title = document.createElement('h3');
    div.classList = 'card';
    div.id = movie.id;
    imageLink.classList = 'card-link';
    image.classList = 'card-img';
    title.classList = 'card-title';

    // Add overview page source
    imageLink.href = "overview.html";

    // Creating image url for poster
    image.src = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;

    // Creating card title
    title.innerText = `${movie.title}`;
    
    // Display movie cards with information added
    imageLink.appendChild(image);
    div.appendChild(imageLink);
    div.appendChild(title);
    cardsContainer.appendChild(div);

    // Store selected movie id in session storage
    document.getElementById(movie.id).onclick = function () {
      sessionStorage.setItem('movieID', movie.id);
    }

  })
};

// Search through TMDB for user query
function searchMovies() {
  let query = document.getElementById("user-search").value
  console.log(query)
  fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
    .then(res => res.json())
    .then(movies => {
      cardsContainer.innerHTML = ""
      renderMovies(movies.results)
      console.log(movies.results)
    })
    .catch(err => console.error(err));
}

