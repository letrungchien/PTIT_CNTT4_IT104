class Book{
    id:number ;
   title:string;
  author:string;
  year:number;
 constructor(id:number,title:string,author:string,year:number){
    this.id=id,
    this.title=title,
    this.author=author
    this.year

    }
 }

 class Li<T>{
    books:T[]=[];
    addBook(book:T):void{
this.books.push(book);
    }
 }