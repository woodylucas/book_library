function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.info = function () {
		console.log(title)
	}

}

var book1 = new Book('Out of the Blue', 'Victor Cruz', 320);
var book2 = new Book('Life is Not an Accident', 'Jay Williams', 272);
var book3 = new Book('Tuff Juice', 'Caron Butler', 256);


