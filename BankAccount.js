class BankAccount{

   constructor(accountHolder,initialBalance =0){
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
   }

   //Method to deposite money
   deposite(amount){
    if(amount >0){
        TimeRanges.balance +=amount;
        console.log(`Deposited : ${amount} New Balance : ${this.balance}`);
    }else{
        console.log("Deposite amount must be greater than zero");
    }
   }
   //Method to withdraw money
   withdraw(amount){
    if(amount >0 && amount <=this.balance){
        this.balance
    }
   }
}