// TOPIC: use inheritance to create a variation on the Book class

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "💥 Out of stock";
    } else if (this.numCopies < 10) {
      return "❓Low stock";
    }
    return "✅ In stock";
  }
}

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of ${this.title} is ${this.edition}.`;
  }
}

// test case:
const CrackingTheCodingInterview = new TechnicalBook(
  "Cracking The Coding Interview",
  "Laackmann McDowell",
  1234567, // ISBN
  7, // numCopies
  "2.3" // edition
);

console.log(CrackingTheCodingInterview); // an instance
console.log(CrackingTheCodingInterview.availability); // 7 --> low stock expected
console.log(CrackingTheCodingInterview.getEdition()); // 2.3 expected
