class BankAccount{

   constructor(accountHolder,initialBalance =0){
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
   }

   //Method to deposite money
   deposite(amount){
    if(amount >0){
        this.balance +=amount;
        console.log(`Deposited : ${amount} New Balance : ${this.balance}`);
    }else{
        console.log("Deposite amount must be greater than zero");
    }
   }
   //Method to withdraw money
   withdraw(amount){
    if(amount >0 && amount <=this.balance){
        this.balance -= amount;
        console.log(`Withdrawn : ${amount}. Remaining Balance : ${this.balance} `);
    }else if(amount > this.balance){
        console.log("Insufficent Balance");
    }else{
        console.log("Withdrawal amount must be greater than zero");
    }
   
}
checkBalance() {
    console.log(`current Balance : ${this.balance}`);
}
}
const myAccount = new BankAccount('Radhika',1000);
myAccount.checkBalance();
myAccount.deposite(500);
myAccount.withdraw(200);
myAccount.checkBalance();
