const fs = require('fs');

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

class AddressBook {
    constructor(filename = 'contacts.json') {
        this.filename = filename;
        this.contacts = this.loadContacts();
    }

    loadContacts() {
        try {
            const data = fs.readFileSync(this.filename, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return []; // Return empty list if file doesn't exist
        }
    }

    saveContacts() {
        fs.writeFileSync(this.filename, JSON.stringify(this.contacts, null, 2), 'utf8');
    }

    addContact(contact) {
        this.contacts.push(contact);
        this.saveContacts();
        console.log('Contact added successfully!');
    }

    displayContacts() {
        console.log('Address Book Contacts:');
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ${contact.phoneNumber}, ${contact.email}`);
        });
    }
}

// Example usage
const myAddressBook = new AddressBook();
const contact1 = new Contact('Amit', 'Sharma', '12 MG Road', 'Mumbai', 'Maharashtra', '400001', '9876543210', 'amit.sharma@example.com');
myAddressBook.addContact(contact1);
myAddressBook.displayContacts();