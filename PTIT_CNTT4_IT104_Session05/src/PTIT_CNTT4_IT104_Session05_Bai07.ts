class _Book {
    private id:number;
    private title:string;
    private author:string;
    constructor(id:number,title:string,author:string) {
        this.id=id,
        this.title=title,
        this.author=author
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }
    setId(id:number){
        return this.id=id;
    }
    setTitle(title:string){
       return this.title=title;
    }
    setAuthor(author:string){
        return this.author=author;
    }
}
class _Library {
       books:_Book[]=[];
    addBook(book:_Book){
        this.books.push(book);
    }
    printBook(){
        for (let i = 0; i < this.books.length; i++) {
            console.log(`ID : ${this.books[i].getId()} Ten: ${this.books[i].getTitle()}  Ten tac gia :${this.books[i].getAuthor()}`);
        }
    }
     UpdateBook(id:number,newTitle:string,newAuthor:string) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].getId()==id) {
            this.books[i].setTitle(newTitle);
            this.books[i].setAuthor(newAuthor);
            return;
        }
    }
    console.log(`khong tim thay sach`);
    return;
}
    }
let bok1= new _Book(1,"Sach1","Nguyen Van A");
let bok2 =new _Book(2,"Sach2","Nguyen Thi A");
let bok3 =new _Book(3,"sach3","Le Van C");
let bok4=new _Book(4,"sach4","Tran Thi B");
let bok5=new _Book(5,"sach5","Le Thi B");
let library1=new _Library();

library1.addBook(bok1);
library1.addBook(bok2);
library1.addBook(bok3);
library1.addBook(bok4);
library1.addBook(bok5);
library1.printBook();

library1.UpdateBook(1,"lap trinh c","Nguyen Gia B");
console.log('sau khi cap nhat');

library1.printBook();
