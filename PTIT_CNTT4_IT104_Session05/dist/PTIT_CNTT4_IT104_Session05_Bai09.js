class __Book1 {
    constructor(id, title, author) {
        this.id = id,
            this.title = title,
            this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setId(id) {
        return this.id = id;
    }
    setTitle(title) {
        return this.title = title;
    }
    setAuthor(author) {
        return this.author = author;
    }
}
class __Library1 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    printBook() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`ID : ${this.books[i].getId()} Ten: ${this.books[i].getTitle()}  Ten tac gia :${this.books[i].getAuthor()}`);
        }
    }
    UpdateBook(id, newTitle, newAuthor) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getId() == id) {
                this.books[i].setTitle(newTitle);
                this.books[i].setAuthor(newAuthor);
                return;
            }
        }
        console.log(`khong tim thay sach`);
        return;
    }
    seachBook(name) {
        let check = -1;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getTitle().toLowerCase().includes(name.toLowerCase())) {
                console.log(`ID : ${this.books[i].getId()} Ten: ${this.books[i].getTitle()}  Ten tac gia :${this.books[i].getAuthor()}`);
                check++;
            }
        }
        if (check == -1) {
            console.log(`khong tim thay sach`);
        }
    }
    deleteBook(id) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getId() == id) {
                this.books.splice(i, 1);
                return;
            }
        }
        console.log("khong tim thay sach");
    }
}
let __book1 = new __Book1(1, "Sach1", "Nguyen Van A");
let __book2 = new __Book1(2, "Sach2", "Nguyen Thi A");
let __book3 = new __Book1(3, "sach3", "Le Van C");
let __book4 = new __Book1(4, "lap trinh python", "Tran Thi B");
let __book5 = new __Book1(5, "lap trinh c", "Le Thi B");
let library3 = new __Library1();
library3.addBook(__book1);
library3.addBook(__book2);
library3.addBook(__book3);
library3.addBook(__book4);
library3.addBook(__book5);
library3.printBook();
library3.deleteBook(1);
library3.deleteBook(8);
console.log(`sau khi xoa`);
library3.printBook();
