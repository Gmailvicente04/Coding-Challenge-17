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

// Task 3: Create a VIPCustomer Class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    }
    
    getTotalSpent() {
        return super.getTotalSpent() * 1.1; // 10% loyalty bonus
    }
}

// Task 4: Build a Client Report System
const customers = [
    new Customer("Marcelo", "marcelo.oswald@example.com"),
    new Customer("Alejandra", "Alecandra.Angulo@example.com"),
    new VIPCustomer("Francisca", "francisca.oswald@example.com", "Gold")
];

customers[0].addPurchase(200);
customers[0].addPurchase(350);
customers[1].addPurchase(100);
customers[2].addPurchase(600);
customers[2].addPurchase(200);

const salesRep = new SalesRep("David");
customers.forEach(customer => salesRep.addClient(customer));

// Total revenue calculation
const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
console.log(`Total Revenue: $${totalRevenue.toFixed(2)}`);

// High-spending customers
const highSpenders = customers.filter(customer => customer.getTotalSpent() > 500);
console.log("High-Spending Customers:", highSpenders.map(c => c.name));

// Customer summary
const customerSummary = customers.map(customer => ({ name: customer.name, totalSpent: customer.getTotalSpent().toFixed(2) }));
console.log("Customer Summary:", customerSummary);