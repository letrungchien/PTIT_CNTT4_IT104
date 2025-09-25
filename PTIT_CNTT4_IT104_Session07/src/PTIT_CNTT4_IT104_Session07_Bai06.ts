class  _Account {
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
 class _UserAcc extends _Account{
    status:string;
    constructor(id:number,userName:string,password:string,isLogin:boolean,role:string,status:string){
        super(id,userName,password,isLogin,role);
        this.status=status
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

 class AdminAcc extends _Account{
    constructor(id:number,userName:string,password:string,isLogin:boolean,role:string){
        super(id,userName,password,isLogin,role)
    }
    banUser(user:_UserAcc[],id:number){
        for (let i = 0; i < user.length; i++) {
            if (user[i].id===id) {
                user[i].status="banned";
                console.log(` da tai khoan co ten ${user[i].userName}`);
                
                return
            }
            
        }
       console.log("khong tim thay tai khoan");
       
    }
 }


 let userAcc3=new _UserAcc(1,"chien","123456",false,"sinh vien","active");
 let userAcc4= new _UserAcc(2,"loc","123456",false,"sinh vien","active");

let user :_UserAcc[]=[];
user.push(userAcc3,userAcc4);
let adminAcc=new AdminAcc(3,"tan","123",true,"sinh vien");
adminAcc.banUser(user,1);

