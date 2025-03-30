// Task 1: Creating a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name; // Assigning customer name 
        this.email = email; // Assigning customer email 
        this.purchaseHistory = []; // Assigning customer purchase history 
        console.log(`New customer created - Name: ${this.name}, Email: ${this.email}`); // Logging new customer creation
    }
    // Adding a method that adds a purchase amount to purchaseHistory
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
        console.log(`Purchase added - Amount: $${amount}`); // Logging amount added 
    }
    // Adding a method that returns total amount spent
    getTotalSpent() {
        const total = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
        console.log(`Total spent by ${this.name} - $${total}`); // Logging total spent after purchases
        return total;
    }
}

// Example usage
const customer1 = new Customer("Vicente Oswald", "vicente.oswald@gmail.com");
customer1.addPurchase(30);
customer1.addPurchase(70);
customer1.getTotalSpent();