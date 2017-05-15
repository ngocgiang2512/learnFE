console.log('test');

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function() {
    console.log(this.isbn);
  }
}

var book = new Book('Great Gatsby', 'page', 'isbn');

console.log(book.title);
book.printIsbn();

Book.prototype.printTitle = function() {
  console.log(this.title);
}

book.printTitle();