const db = require('../data/database');

const bcrypt = require('bcryptjs');

class User {
    constructor(email, password, fullname, street, postal, city) {
        this.email = email;
        this.password = password;
        this.name = fullname;
        this.address = {
            street: street,
            postal: postal,
            city: city
        };
    }

    async signup() {
        const hashpassword = await bcrypt.hash(this.password, 12);

        await db.getDb().collection('users').insertOne({
            email: this.email,
            password: this.password,
            name: this.name,
            address: this.address
        });
    }
}

module.exports=User