// Class
class User{
    public name: string
    public age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

let user = new User('Dani', 15)

console.log(user)

// Simple Write Class
class Age {
    name: string

    constructor(name: string, public age: number) {
        this.name = name
    }
}

let age = new Age('Dani', 15)

console.log(age)

// Inheritance
class Admin extends User {
    read: boolean = true
    write: boolean = true
    phone: string

    constructor(phone: string, name: string, age: number) {
        super(name, age)
        this.phone = phone
    }

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }
}

let admin = new Admin('62838933', 'Dani', 15)

console.log(admin)