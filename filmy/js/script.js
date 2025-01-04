const movies = [
    { title: "Tamte Święta", image: "C:\filmy\materials\z1fipqup.jpeg" },
    // Додай інші фільми в масив за аналогією
];

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const movieList = document.getElementById('movieList');
    
    // Очищуємо список фільмів перед виведенням результатів
    movieList.innerHTML = '';

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));

    // Якщо знайдені фільми, додаємо їх до списку
    filteredMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const movieImage = document.createElement('img');
        movieImage.src = movie.image;
        movieImage.alt = movie.title;

        const movieTitle = document.createElement('p');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;

        movieElement.appendChild(movieImage);
        movieElement.appendChild(movieTitle);
        movieList.appendChild(movieElement);
    });
}
