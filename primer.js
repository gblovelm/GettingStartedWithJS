// JS file to store 5 book names into an array and printout to the console 
// only the books that do not have the name "Great" in their name
// 
// Martin Lovell
// 08/07/2019

function addFavouriteBook(bookName) {

  if ( !bookName.includes("Great") ) {
    favouriteBooks.push(bookName);
  }
}

function printFavouriteBooks() {
  console.log(`You have ${favouriteBooks.length} favourite books.`);
  for (let bookName of favouriteBooks) {
    console.log(bookName);
  }
}

var favouriteBooks = [];  // its an array

addFavouriteBook("A Song of Ice and Fire");
addFavouriteBook("The Great Gatsby");
addFavouriteBook("Crime & Punishment");
addFavouriteBook("GreatExpectations");
addFavouriteBook("You Don't know JS");

printFavouriteBooks();
