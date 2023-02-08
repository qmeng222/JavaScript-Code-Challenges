// // 1. use function syntax to create prototype:
// // NOTE: it's good practice to name constructor functions (blue print) with an upper-case first letter
// function Movie(title, director, genre, releaseYear, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseYear = releaseYear;
//   this.rating = rating;
// }

// Movie.prototype.getOverview = function () {
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
// };

// 2. use class syntax to create prototype:
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }
}

// test cases:
const Spiderman = new Movie("Spiderman", "Sam Raimi", "action", 2002, 87);
const TheDarkKnight = new Movie(
  "The Dark Knight",
  "Chris Nolan",
  "action",
  2008,
  83
);

console.log(Spiderman.getOverview());
console.log(TheDarkKnight.getOverview());
