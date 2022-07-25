// Задача №1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		if (this.state === 0) {
			this.state = 0;
		}

		let sum = this.state * 1.5;

		if (sum > 100) {
			sum = 100;
			this.state = sum;
		} this.state = sum;
	}

	get state() {
		return this._state;
	}

	set state(value) {
		if (value < 0) {
			return this._state = 0;
		} else if (value > 100) {
			return this._state = 100;
		} return this._state = value;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super();
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super();
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.author = author;
		this.type = 'book';
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super();
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.author = author;
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super();
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.author = author;
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super();
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.author = author;
		this.type = 'detective';
	}
}

// const picknick = new FantasticBook(
// 	"Аркадий и Борис Стругацкие",
// 	"Пикник на обочине",
// 	1972,
// 	168,
// );
  
// console.log(picknick.author);
// picknick.state = 10;
// console.log(picknick.state); 
// picknick.fix()
// console.log(picknick.state); 

// Задача №2

class Library extends Magazine {
	constructor (name, books) {
		super()
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (this.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (type == this.books[i] && value == this.books[i]) {
				return this.addBook;
			} return null
		}
	}
	
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (bookName == this.books[i]) {
				delete this.books[i];
				return bookName;
			} return null
		}
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("Герберт Уэллс", "Машина времени"));
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3