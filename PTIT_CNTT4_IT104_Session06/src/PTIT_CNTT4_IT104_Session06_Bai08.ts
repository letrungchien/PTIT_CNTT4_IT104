class Book {
    id:number;
    title:string;
    author:string;
    stock:number;
    status:boolean;
    constructor(id:number,title:string,author:string,stock:number,status:boolean) {
        this.id=id;
        this.title=title;
        this.author=author;
        this.stock=stock;
        this.status=status
    }
}
class Member{
    id:number;
    name:string;
    contact:string;
    lendedBooks:string[];
    status:boolean;
  constructor(id:number,name:string,contact:string,lendedBooks:string[],status:boolean){
    this.id=id,
    this.name=name,
    this.contact=contact,
    this.lendedBooks=lendedBooks,
    this.status=status
  }
}
class LendedBooks{
memberId:number;
bookId:number;
dueDate:string
constructor(memberId:number,bookId:number,dueDate:string){
    this.memberId=memberId,
    this.bookId=bookId,
    this.dueDate=dueDate
}
}
class Library{
    books:Book[];
    members:Member[];
    constructor(){
        this.books=[],
        this.members=[]
    }
    addBook(book:Book){
        this.books.push(book);
    }
    showBook(){
        for (let i = 0; i < this.books.length; i++) {
            console.log(`ID:${this.books[i].id} Tieu de :${this.books[i].title} Tac gia:${this.books[i].author} So luong sach: ${this.books[i].stock} Trang thai :${this.books[i].status}`);
        }
    }
}
let library=new Library();
let book1=new Book(1,"Sach 1","Nguyen Van A",7,true);
let book2=new Book(2,"Sach 2","Le van F",2,false);
library.addBook(book1);
library.addBook(book2);
library.showBook();