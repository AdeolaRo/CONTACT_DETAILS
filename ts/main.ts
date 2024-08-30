import { Person } from "./classe/person.js";


const firstName = (document.getElementById('newFirstName') as HTMLInputElement).value;
const lastName = (document.getElementById('newLastName') as HTMLInputElement).value;
const birthDate = (document.getElementById('newBirthDate') as HTMLInputElement).value;

const email = (document.getElementById('newEmail') as HTMLInputElement).value;
const phoneNumber = parseInt((document.getElementById('newPhoneNumber') as HTMLInputElement).value);
const avatarURL = (document.getElementById('newAvatarURL') as HTMLInputElement).value;





let contacts: Person[] = [];
let defaultContactIndex: number | null = null;

let person1 = new Person("Alice", "Smith", new Date("1990-01-01"), "alice@alice.com", 1234567890);
let person2 = new Person("Jean", "Dupont", new Date("2000-01-01"), "jean@jean.com", 1234567890);
let person3 = new Person("Anne", "Dunnil", new Date("2005-01-01"), "anne@anne.com", 1234567890);
let person4 = new Person("Hector", "Josh", new Date("1985-01-01"), "hector@hector.com", 1234567890);

console.log(person1);

contacts.push(person1);
contacts.push(person2);
contacts.push(person3);
contacts.push(person4);

console.log(contacts);

function showAddContact() {
    const addContact = document.getElementById('addContact') as HTMLDivElement;
    addContact.style.display = 'block';
}

function addContact() {
    const newContact = new Person(firstName, lastName, new Date(birthDate), email, phoneNumber);
    if (avatarURL) {
        newContact.urlPhoto = avatarURL;
    }

    contacts.push(newContact);
    
    const addContact = document.getElementById('addContact') as HTMLDivElement;
    addContact.style.display = 'none';

}


function listeContacts() {
    const tableContent = document.getElementById('tableContent') as HTMLTableSectionElement;
    tableContent.innerHTML = '';

    contacts.forEach((contact, index) => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = `${contact.firstName}`;
        cell.onclick = () => showContactDetails(index);
        row.appendChild(cell);
        tableContent.appendChild(row);
    });
}

function showContactDetails(index: number) {
    defaultContactIndex = index;
    const contact = contacts[index];

    (document.getElementById('firstName') as HTMLInputElement).value = contact.firstName;
    (document.getElementById('lastName') as HTMLInputElement).value = contact.lastName;
    (document.getElementById('birthDate') as HTMLInputElement).value = contact.birthDate.toLocaleDateString();
    (document.getElementById('email') as HTMLInputElement).value = contact.email;
    (document.getElementById('phoneNumber') as HTMLInputElement).value = contact.phoneNumber.toString();

    const urlPhotoDiv = document.getElementById('url_photo') as HTMLDivElement;
    urlPhotoDiv.innerHTML = contact.urlPhoto ? `<img src="${contact.urlPhoto}" alt="Avatar"/>` : '';
}

function deleteContact():void {
        (document.getElementById('firstName') as HTMLInputElement).value = '';
        (document.getElementById('lastName') as HTMLInputElement).value = '';
        (document.getElementById('birthDate') as HTMLInputElement).value = '';
        (document.getElementById('email') as HTMLInputElement).value = '';
        (document.getElementById('phoneNumber') as HTMLInputElement).value = '';
        (document.getElementById('url_photo') as HTMLDivElement).innerHTML = '';
}


