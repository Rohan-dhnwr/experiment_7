// List of movies
const movies = [
  "Inception",
  "Shutter Island",
  "Don No.1",
  "The Dark Knight",
  "Interstellar",
  "Hero No. Zero",
  "Lucky-The Racer",
  "Shawshank Redemption",
  "Phir Hera Pheri",
  "Mass"
];

const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");

// Function to display movies
function displayMovies(filteredMovies) {
  movieList.innerHTML = "";
  filteredMovies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = movie;
    movieList.appendChild(li);
  });
}

// Display all movies initially
displayMovies(movies);

// Filter movies as user types
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredMovies = movies.filter(movie =>
    movie.toLowerCase().includes(searchTerm)
  );
  displayMovies(filteredMovies);
});
