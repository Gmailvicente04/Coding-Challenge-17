// Task 1: Creating a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name; // Assigning customer name 
        this.email = email; // Assigning customer email 
        this.purchaseHistory = []; // Assigning customer purchase history 
        console.log(`New customer created - Name: ${this.name}, Email: ${this.email}`); // Logging new customer creation
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
        console.log(`Purchase added - Amount: $${amount}`); // Logging amount added 
    }
    //returns total amount spent
    getTotalSpent() {
        const total = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
        console.log(`Total spent by ${this.name} - $${total}`); // Logging total spent after purchases
        return total;
    }
}

// Example
const customer1 = new Customer("Vicente Oswald", "vicente.oswald@gmail.com");
customer1.addPurchase(30);
customer1.addPurchase(70);
customer1.getTotalSpent();

// Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }
    
    addClient(customer) {
        this.clients.push(customer);
        console.log(`Client ${customer.name} added to Sales Rep ${this.name}.`);
    }
    
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : 0;
    }
}

