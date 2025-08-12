class Account1{
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
class SavingAccount extends Account1{
     interestRate:number;
     constructor(accountNumber:string,balance:number,status:string,interesRate:number){
        super(accountNumber,balance,[],status);
        this.interestRate=interesRate
     }
}

let tk1=new SavingAccount("047473",60000,"hoat dong",4);
tk1.deposit(10000);
tk1.withdraw(5000);
tk1.showhistory();

