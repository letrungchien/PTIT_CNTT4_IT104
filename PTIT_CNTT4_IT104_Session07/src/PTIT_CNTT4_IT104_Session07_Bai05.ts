class  Account {
    id:number;
    userName:string;
   private password:string;
   isLogin:boolean;
   role:string;
   constructor(id:number,userName:string,password:string,isLogin:boolean,role:string){
    this.id=id,
    this.userName=userName,
    this.password=password,
    this.isLogin=isLogin,
    this.role=role
   }
   getPassword():string{
    return this.password;
   }
   login(){
    console.log(" dang nhap thanh cong");
   }
   logout(){
    if(this.isLogin===true){
        this.isLogin=false;
        console.log("Dang xuat thanh cong"); 
    }
   }
}
 class UserAcc extends Account{
    status:string;
    constructor(id:number,userName:string,password:string,isLogin:boolean,role:string,status:string){
        super(id,userName,password,isLogin,role),
        this.status=status;
    }
    login(): void {
        if (this.status==="active") {
            console.log("dang nhap thanh cong");
            this.isLogin=true;
            return;
        }
        console.log("tai khoan bi khoa");
        
    }
 }
 let userAcc1=new UserAcc(1,"chien","123456",false,"sinh vien","active");
 let userAcc2=new UserAcc(2,"loc","12345",false,"sinh vien","banned");

 userAcc1.login();
 userAcc1.logout();

 userAcc2.login();
