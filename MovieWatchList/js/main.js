let movieList = {
    movies: [],

    addMovie(movie) {
        this.movies.push(movie);
    },

    displayWatchlist() {
        let moviesListDiv = document.getElementById("movie-list");
        moviesListDiv.innerHTML = "";

        this.movies.forEach((movie) => {
            let movieElement = document.createElement("p");
            movieElement.textContent = `${movie}`;
            moviesListDiv.appendChild(movieElement);
        });
    },

    removeMovie(movie) {
        const index = this.movies.indexOf(movie);
        if (index > -1) {
            this.movies.splice(index, 1);
        }
    },
};

document.getElementById("add-movie-btn").addEventListener("click", function () {
    let newMovie = document.getElementById("movie-name").value;

    movieList.addMovie(newMovie);
    movieList.displayWatchlist();
    document.getElementById("movie-name").value = "";
});

document.getElementById("remove-movie-btn").addEventListener("click", function() {
    let watchedMovie = document.getElementById("movie-name").value;

    movieList.removeMovie(watchedMovie);
    movieList.displayWatchlist();
    document.getElementById("movie-name").value = "";

});

