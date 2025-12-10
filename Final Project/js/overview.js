const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWM0MmRhODRkOWNmMDA5NTFmNjRiZjA4MzNmN2FhNiIsIm5iZiI6MTc2NDg4NjU5NS42NzkwMDAxLCJzdWIiOiI2OTMyMDg0MzIwZjkxOGViMmI2OWJhMWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ru4KHUZeGe02JDhcl25bBdpC2LrbYFgwRw1QVKnWJRw'
  }
};

const infoContainer = document.querySelector('#movie-info-container');

// GET movie information using movieID
fetch('https://api.themoviedb.org/3/movie/' + sessionStorage.getItem("movieID") + '?language=en-US', options)
    .then(res => res.json())
    .then(details => {
        console.log(details);

        // Creating info elements
        const detailsDiv = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h1');
        const subInfo = document.createElement('h3');
        const overview = document.createElement('p');
        const watchlistButton = document.createElement('button');
        detailsDiv.id = 'movie-details';
        image.id = 'movie-poster';
        title.id = 'movie-title';
        subInfo.id = 'movie-subinfo';
        overview.id = 'movie-overview';
        watchlistButton.id = 'watchlist-btn';

        // local storage testing
        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete-btn';
        deleteButton.innerText = 'delete';


        // Creating image url for poster
        image.src = `https://image.tmdb.org/t/p/w500${details.poster_path}`;

        // Movie title
        title.innerText = `${details.title.toUpperCase()}`;

        // Movie release date and runtime
        subInfo.innerText = `RELEASED: ${details.release_date}        RUNTIME: ${details.runtime} min`;

        // Movie overview
        overview.innerText = `${details.overview}`;

        // Create button to add to watchlist
        watchlistButton.innerText = 'ADD TO WATCHLIST';

        // Display movie information
        infoContainer.appendChild(image);
        detailsDiv.appendChild(title);
        detailsDiv.appendChild(subInfo);
        detailsDiv.appendChild(overview);
        detailsDiv.appendChild(watchlistButton);

        detailsDiv.appendChild(deleteButton);

        infoContainer.appendChild(detailsDiv);

        document.getElementById('watchlist-btn').onclick = function () {
          addMovieToWatchlist();
        }

        document.getElementById('delete-btn').onclick = function () {
          deleteWatchlist();
        }
    })
    .catch(err => console.error(err));


    // Create a new watchlist
    function createWatchlist() {
      const newWatchlist = [];
      localStorage.setItem('movieWatchlist', JSON.stringify(newWatchlist));
    }

    // Add movie to watchlist
    function addMovieToWatchlist() {
      // Create a new watchlist if there isn't one already
      if (localStorage.getItem('movieWatchlist') == null) {
        createWatchlist();
        console.log('created watchlist');
      }
      
      // Add movie id to watchlist
      const watchlist = JSON.parse(localStorage.getItem('movieWatchlist'));
      console.log(`Before shift:`, watchlist);
      
      if (watchlist.indexOf(sessionStorage.getItem('movieID')) != -1) {
        alert('Movie is already in your watchlist!');
      }
      else {
        watchlist.unshift(sessionStorage.getItem('movieID'));
        console.log(`After shift:`, watchlist);
        localStorage.setItem('movieWatchlist', JSON.stringify(watchlist));
      }
    }

    function deleteWatchlist() {
      localStorage.removeItem('movieWatchlist');
      console.log('watchlist deleted');
    }
  