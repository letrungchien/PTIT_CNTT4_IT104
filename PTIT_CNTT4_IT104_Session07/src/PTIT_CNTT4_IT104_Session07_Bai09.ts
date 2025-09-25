 class User{
    id:number;
    posts:string[];
    followers:string[];
    constructor(id:number,posts:string[],followers:string[]){
        this.id=id,
        this.posts=posts,
        this.followers=followers
    }
    createPost(content:string){
        return this.posts.push(content);
    }

 }
 class Post{
    id:number;
    likes:string[];
    comments:string[];
    userId:number;
    content:string;
    constructor(id:number,likes:string[],comments:string[],userId:number,content:string){
        this.id=id,
        this.likes=likes,
        this.comments=comments,
        this.userId=userId,
        this.content=content
    }
    addLike(user){
        return this.likes.push(user);
    }

  addComment(comment:string){
  this.comments.push(comment);
  }
 }

 class _Comment{
    id:number;
  userId:number;
  content:string;
  replies:string[];
  constructor(id:number,userId:number,content:string,replies:string[]){
    this.id=id,
    this.userId=userId,
    this.content=content,
     this.replies=replies
  }
  addRely(rely){
    this.replies.push(rely);
  }
 }