class Book {
    private title:string;
    private author:string;
    constructor(title:string,author:string) {
        this.title=title,
        this.author=author
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }
    setTitle(title:string){
       return this.title=title;
    }
    setAuthor(author:string){
        return this.author=author;
    }
}
class Library {
       books:Book[]=[];
    addBook(book:Book){
        this.books.push(book);
    }
    printBook(){
        for (let i = 0; i < this.books.length; i++) {
            console.log(`Ten: ${this.books[i].getTitle()}  Ten tac gia :${this.books[i].getAuthor()}`);
        }
    }
    }
let book1= new Book("Sach1","Nguyen Van A");
let book2 =new Book("Sach2","Nguyen Thi A");
let book3 =new Book("sach3","Le Van C");
let book4=new Book("sach4","Tran Thi B");
let book5=new Book("sach5","Le Thi B");
let library=new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printBook();