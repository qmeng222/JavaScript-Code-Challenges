function Book(title, author, ISBN, numCopies) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;

  // NOTE: each instance can use the prototype's function without creating a new function✊
  // func 1:
  Book.prototype.getAvailability = function () {
    if (this.numCopies === 0) {
      return "💥 Out of stock";
    } else if (this.numCopies < 10) {
      return "❓Low stock";
    }
    return "✅ In stock";
  };

  // func 2: subtract sold from the total number of copies, if no argument is passed, default the number of copies to sell to 1
  Book.prototype.sell = function (numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  };

  // func 3: takes in a number of copies to restock and add it it to the total number of copies; if no argument is passed, default the restock number to 5
  Book.prototype.restock = function (numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  };
}

// test:
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123456, 0);
console.log(HungerGames.getAvailability()); // Out of stock expected
HungerGames.restock(12);
console.log(HungerGames.getAvailability()); // In stock expected
HungerGames.sell(6);
console.log(HungerGames.getAvailability()); // Low stock expected
