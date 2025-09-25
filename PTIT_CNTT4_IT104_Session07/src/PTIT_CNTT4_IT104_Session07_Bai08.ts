class _Account1{
    accountNumber:string;
    protected balance:number;
    protected history:string[];
protected status:string;
constructor(accountNumber:string,balance:number,histoty:string[],status:string){
    this.accountNumber=accountNumber,
    this.balance=balance,
    this.history=histoty,
    this.status
}
deposit(amount:number){
    this.balance+=amount;
   console.log(`+${amount} so du ${this.balance}`);
   this.history.push(`+${amount} so du ${this.balance}`);
   return;
}
withdraw(amount:number){
    if (this.balance<amount) {
        console.log("so du khog du");
        return;
    }
    this.balance-=amount;
   console.log(`-${amount} so du ${this.balance}`); 
   this.history.push(`-${amount} so du ${this.balance}`);
   return;
}
  showhistory(){
    for (let i = 0; i < this.history.length; i++) {
        console.log(this.history[i]);
    }
 }
}
class CheckingAccount extends _Account1{
     overdraftLimit:number;
     constructor(accountNumber:string,balance:number,status:string,overdraftLimit:number){
        super(accountNumber,balance,[],status);
        this.overdraftLimit=overdraftLimit
     }
     withdraw(amount: number): void {
         if (amount>0&&this.balance-amount>=-this.overdraftLimit) {
            this.balance-=amount;
   console.log(`-${amount} so du ${this.balance}`); 
   this.history.push(`-${amount} so du ${this.balance}`);
   return;
         }
     }
}
let tk11 =new CheckingAccount("1234",1000,"hoat dong",500);

tk11.deposit(100);
tk11.withdraw(1500);
tk11.showhistory();

