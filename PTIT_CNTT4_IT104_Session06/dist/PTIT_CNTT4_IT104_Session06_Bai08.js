class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, lendedBooks, status) {
        this.id = id,
            this.name = name,
            this.contact = contact,
            this.lendedBooks = lendedBooks,
            this.status = status;
    }
}
class LendedBooks {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId,
            this.bookId = bookId,
            this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [],
            this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBook() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`ID:${this.books[i].id} Tieu de :${this.books[i].title} Tac gia:${this.books[i].author} So luong sach: ${this.books[i].stock} Trang thai :${this.books[i].status}`);
        }
    }
}
let library = new Library();
let book1 = new Book(1, "Sach 1", "Nguyen Van A", 7, true);
let book2 = new Book(2, "Sach 2", "Le van F", 2, false);
library.addBook(book1);
library.addBook(book2);
library.showBook();
