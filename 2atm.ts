class ATM {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    withdraw(amount: number): void {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
        console.log(`Successfully withdrew $${amount}. Remaining balance: $${this.balance}`);
      }
    }
  
    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Successfully deposited $${amount}. Current balance: $${this.balance}`);
    }
  
    getBalance(): void {
      console.log(`Current balance: $${this.balance}`);
    }
  }
  
  // Example usage
  const atm = new ATM(1000);
  atm.getBalance(); // Current balance: $1000
  atm.withdraw(500); // Successfully withdrew $500. Remaining balance: $500
  atm.deposit(200); // Successfully deposited $200. Current balance: $700
  atm.getBalance(); // Current balance: $700
  