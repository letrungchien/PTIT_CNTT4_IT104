class __Book {
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
class __Library {
       books:__Book[]=[];
    addBook(book:__Book){
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
seachBook(name:string){
    let check=-1;
    for (let i = 0; i < this.books.length; i++) {
        if(this.books[i].getTitle().toLowerCase().includes(name.toLowerCase())){
               console.log(`ID : ${this.books[i].getId()} Ten: ${this.books[i].getTitle()}  Ten tac gia :${this.books[i].getAuthor()}`);
               check++;
        }
    }
    if (check==-1) {
        console.log(`khong tim thay sach`);
        
    }
}
    }
let _book1= new __Book(1,"Sach1","Nguyen Van A");
let _book2 =new __Book(2,"Sach2","Nguyen Thi A");
let _book3 =new __Book(3,"sach3","Le Van C");
let _book4=new __Book(4,"lap trinh python","Tran Thi B");
let _book5=new __Book(5,"lap trinh c","Le Thi B");
let library2=new __Library();

library2.addBook(_book1);
library2.addBook(_book2);
library2.addBook(_book3);
library2.addBook(_book4);
library2.addBook(_book5);


library2.seachBook("lap");
library2.seachBook("bt");