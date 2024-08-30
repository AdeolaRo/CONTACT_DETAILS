
export class Person {

    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    phoneNumber: number;
    urlPhoto?: string; // pour ajouter une photo après.

    constructor(firstName: string, lastName: string, birthDate: Date, email: string, phoneNumber: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}


