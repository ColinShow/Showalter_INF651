const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWM0MmRhODRkOWNmMDA5NTFmNjRiZjA4MzNmN2FhNiIsIm5iZiI6MTc2NDg4NjU5NS42NzkwMDAxLCJzdWIiOiI2OTMyMDg0MzIwZjkxOGViMmI2OWJhMWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ru4KHUZeGe02JDhcl25bBdpC2LrbYFgwRw1QVKnWJRw'
  }
};

const movieList = document.querySelector('#movie-list');

// Display emptyMessage if no watchlist is created
if (localStorage.getItem('movieWatchlist') == null) {
    const emptyMessage = document.createElement('h2');
    emptyMessage.id = 'empty-message';
    emptyMessage.innerText = `No watchlist found :(
                              Add some movies to your watchlist!`;
    movieList.appendChild(emptyMessage);
}
// Display watchlist
else {
    renderWatchlist(JSON.parse(localStorage.getItem('movieWatchlist')));
}

// Display watchlist
function renderWatchlist(watchlist) {
    watchlist.forEach(movie => {
        fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US`, options)
            .then(res => res.json())
            .then(details => {
                console.log(details);

                const div = document.createElement('div');
                const imageLink = document.createElement('a');
                const image = document.createElement('img');
                const title = document.createElement('h2');

                div.classList = 'card';
                div.id = movie;
                imageLink.classList = 'card-link';
                image.classList = 'card-img';
                title.classList = 'card-title';

                imageLink.href = 'overview.html'
                image.src = `https://image.tmdb.org/t/p/w342${details.poster_path}`;
                title.innerText = `${details.title}`;

                imageLink.appendChild(image);
                div.appendChild(imageLink);
                div.appendChild(image);
                div.appendChild(title);
                movieList.appendChild(div);
            })
            .catch(err => console.error(err));
    });
}